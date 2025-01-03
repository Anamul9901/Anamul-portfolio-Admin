"use client";

import AddProjectModal from "@/src/components/modals/AddProjectModel";
import Loading from "@/src/components/UI/loading";
import {
  useDeleteProjectMutation,
  useGetAllProjectQuery,
} from "@/src/redux/features/project/projectApi";
import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Projects = () => {
  const [deleteProject] = useDeleteProjectMutation();
  const {
    data: allProjects,
    isLoading,
    error,
  } = useGetAllProjectQuery(undefined);
  const projects = allProjects?.data;

  const handleProjectDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deleted!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteProject(id).unwrap();
        console.log("res", res);
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
    return <div>Error loading projects</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center py-6">
      <h1 className="text-lg font-bold mb-4">Projects</h1>
      <button>
        <AddProjectModal />
      </button>
      </div>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Frontend Live</th>
            <th className="py-2 px-4 border">Backend Live</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project: any, index: number) => (
            <tr key={project._id}>
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-4 border">{project.name}</td>
              <td className="py-2 px-4 border">
                <a
                  href={project.frLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend
                </a>
              </td>
              <td className="py-2 px-4 border">
                <a
                  href={project.bcLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend
                </a>
              </td>
              <td className="py-2 px-4 border">
                <Link
                  href={`/dashboard/projects/${project._id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View
                </Link>
                <button
                  onClick={() => handleProjectDelete(project._id)}
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

export default Projects;
