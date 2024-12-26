"use client";
import AddExperienceModel from "@/src/components/modals/AddExperienceModel";
import {
  useGetAllExperienceQuery,
  useDeleteExperienceMutation,
} from "@/src/redux/features/experience/experienceApi";
import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ExperiencePage = () => {
  const {
    data: getAllExperience,
    isLoading,
    error,
  } = useGetAllExperienceQuery(undefined);
  const experiences = getAllExperience?.data;
  const [deleteExperience] = useDeleteExperienceMutation();

  const handleExperienceDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteExperience(id).unwrap();
        console.log("res", res);
        if (res?.data) {
          toast.success(`${res?.message}`);
        }
      }
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading experiences.</div>;
  }

  return (
    <div className="experience-page">
      <div className="flex justify-between py-6">
        <h1 className="text-2xl font-bold mb-4">Experiences</h1>
        <button>
          <AddExperienceModel />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">#</th>
              <th className="border px-4 py-2 text-left">Company</th>
              <th className="border px-4 py-2 text-left">Position</th>
              <th className="border px-4 py-2 text-left">Start Date</th>
              <th className="border px-4 py-2 text-left">End Date</th>
              <th className="border px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {experiences?.map((experience: any, index: number) => (
              <tr key={experience._id} className="">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{experience.companyName}</td>
                <td className="border px-4 py-2">{experience.position}</td>
                <td className="border px-4 py-2">
                  {new Date(experience.startDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  {experience.endDate
                    ? new Date(experience.endDate).toLocaleDateString()
                    : "Present"}
                </td>
                <td className="border px-4 py-2">
                  <Link
                    href={`/dashboard/experience/${experience._id}`}
                    className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded"
                  >
                    view
                  </Link>
                  <button
                    onClick={() => handleExperienceDelete(experience._id)}
                    className="bg-red-500 hover:bg-red-700  font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExperiencePage;
