"use client";

import AddSkillModal from "@/src/components/modals/AddSkillModel";
import UpdateSkillModal from "@/src/components/modals/UpdateSkillModel";
import {
  useDeleteSkillMutation,
  useGetAllSkillQuery,
} from "@/src/redux/features/skill/skillApi";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Skills = () => {
  const [deleteSkill] = useDeleteSkillMutation();
  const { data: allSkills, isLoading, error } = useGetAllSkillQuery(undefined);
  const skills = allSkills?.data;

  const handleSkillDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteSkill(id).unwrap();
        if (res?.data) {
          toast.success(`${res?.message}`);
        }
      }
    });
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div>Error loading skills</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center py-6">
        <h1 className="text-lg font-bold mb-4">Skills</h1>
        <button>
          <AddSkillModal />
        </button>
      </div>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Link</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {skills?.map((skill: any, index: number) => (
            <tr key={skill._id}>
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="py-2 px-4 border">{skill.name}</td>
              <td className="py-2 px-4 border">
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Link
                </a>
              </td>
              <td className="py-2 px-4 border">
                <button>
                  <UpdateSkillModal skill={skill} />
                </button>
                <button
                  onClick={() => handleSkillDelete(skill._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
