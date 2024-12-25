"use client";

import UpdateProjectModal from "@/src/components/modals/UpdateProjectModel";
import { useGetSingleProjectQuery } from "@/src/redux/features/project/projectApi";
import { useParams } from "next/navigation";

const ViewProject = () => {
  const { singleProject: projectId } = useParams();
  const {
    data: singleProject,
  } = useGetSingleProjectQuery(projectId);
  const project = singleProject?.data;
  if (!project) {
    return <div>No project data found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Project Details</h1>
      <div className="border border-gray-300 p-4">
        <div className="mb-4">
          <strong>Name:</strong> {project.name}
        </div>
        <div className="mb-4">
          <strong>Description:</strong> {project.description}
        </div>
        <div className="mb-4">
          <strong>Image:</strong>
          <div className="mt-2">
            <img
              src={project.image}
              alt={project.name}
              className="w-64 h-64 object-cover border"
            />
          </div>
        </div>
        <div className="mb-4">
          <strong>Frontend Live:</strong>{" "}
          <a href={project.frLive} target="_blank" rel="noopener noreferrer">
            {project.frLive}
          </a>
        </div>
        <div className="mb-4">
          <strong>Frontend Repository:</strong>{" "}
          <a href={project.frRepo} target="_blank" rel="noopener noreferrer">
            {project.frRepo}
          </a>
        </div>
        <div className="mb-4">
          <strong>Backend Live:</strong>{" "}
          <a href={project.bcLive} target="_blank" rel="noopener noreferrer">
            {project.bcLive}
          </a>
        </div>
        <div className="mb-4">
          <strong>Backend Repository:</strong>{" "}
          <a href={project.bcRepo} target="_blank" rel="noopener noreferrer">
            {project.bcRepo}
          </a>
        </div>
        <div className="mb-4">
          <strong>Created At:</strong>{" "}
          {new Date(project.createdAt).toLocaleString()}
        </div>
        <div className="mb-4">
          <strong>Updated At:</strong>{" "}
          {new Date(project.updatedAt).toLocaleString()}
        </div>

        <div>
          <UpdateProjectModal project={project} />
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
