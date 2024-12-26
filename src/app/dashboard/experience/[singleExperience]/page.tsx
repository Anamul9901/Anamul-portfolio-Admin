"use client";

import UpdateExperienceModel from "@/src/components/modals/UpdateExperienceModel";
import { useGetSingleExperienceQuery } from "@/src/redux/features/experience/experienceApi";
import { useParams } from "next/navigation";

const SingExperience = () => {
  const { singleExperience } = useParams();
  console.log("ID:", singleExperience);

  const {
    data: getSingleExperience,
    isLoading,
    error,
  } = useGetSingleExperienceQuery(singleExperience);

  const experience = getSingleExperience?.data;
  console.log("Experience Data:", experience);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading experience details.</div>;
  }

  return (
    <div className="single-experience">
      <h1 className="text-2xl font-bold mb-4 py-12">Experience Details</h1>
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-semibold">{experience?.companyName}</h2>
        <p className="text-gray-600">
          <strong>Title:</strong> {experience?.title}
        </p>
        <p className="text-gray-600">
          <strong>Position:</strong> {experience?.position}
        </p>
        <p className="text-gray-600">
          <strong>Description:</strong> {experience?.description}
        </p>
        <p className="text-gray-600">
          <strong>Start Date:</strong>{" "}
          {new Date(experience?.startDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>End Date:</strong>{" "}
          {experience?.endDate
            ? new Date(experience?.endDate).toLocaleDateString()
            : "Present"}
        </p>
        <a
          href={experience?.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Company Website
        </a>
      </div>
      <button>
        <UpdateExperienceModel experience={experience} />
      </button>
    </div>
  );
};

export default SingExperience;
