import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import {
  useUpdateExperienceMutation,
} from "@/src/redux/features/experience/experienceApi";

const UpdateExperienceModel = ({ experience }: { experience: any }) => {
  const [updateExperience] = useUpdateExperienceMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updateableData = { id: experience._id, data };
    const res = await updateExperience(updateableData).unwrap();
    if (res?.data) {
      toast.success(`${res?.message}`);
    }
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Update Experience"
        buttonText="Update Experience"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput
              label="Company Name"
              name="companyName"
              defaultValue={experience?.companyName}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Title"
              name="title"
              defaultValue={experience?.title}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Description"
              name="description"
              defaultValue={experience?.description}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Position"
              name="position"
              defaultValue={experience?.position}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Start Date"
              name="startDate"
              defaultValue={experience?.startDate}
            ></FXInput>
            <FXInput
              label="End Date"
              name="endDate"
              defaultValue={experience?.endDate}
            ></FXInput>
            <FXInput
              label="Company Info"
              name="companyInfo"
              defaultValue={experience?.companyInfo}
            ></FXInput>
            <FXInput
              label="Company Link"
              name="companyLink"
              defaultValue={experience?.companyLink}
            ></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Update Experience
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default UpdateExperienceModel;
