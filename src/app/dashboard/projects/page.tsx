"use client";

import Loading from "@/src/components/UI/loading";
import { useGetAllProjectQuery } from "@/src/redux/features/project/projectApi";
import Link from "next/link";

const Projects = () => {
  const {
    data: allProjects,
    isLoading,
    error,
  } = useGetAllProjectQuery(undefined);
  const projects = allProjects?.data;

  if (error) {
    return <div>Error loading projects</div>;
  }

  return (
    <div className="p-4">
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
      <h1 className="text-lg font-bold mb-4">Projects</h1>
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
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
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
