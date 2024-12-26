import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useCreateExperienceMutation } from "@/src/redux/features/experience/experienceApi";

const AddExperienceModel = () => {
  const [createExperience] = useCreateExperienceMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await createExperience(data).unwrap();
    if (res?.data) {
      toast.success(`${res?.message}`);
    }
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Add Experience"
        buttonText="Add Experience"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput label="Company Name" name="companyName" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Title" name="title"></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Description" name="description" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Position" name="position" required></FXInput>
          </div>
          <div className="py-1">
            <FXInput label="Start Date" name="startDate" required></FXInput>
            <FXInput label="End Date" name="endDate" required></FXInput>
            <FXInput label="Company Info" name="companyInfo" required></FXInput>
            <FXInput label="Company Link" name="companyLink" required></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Add Experience
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default AddExperienceModel;
