import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useUpdateBlogMutation } from "@/src/redux/features/blog/blogApi";
import { useCreateSkillMutation, useUpdateSkillMutation } from "@/src/redux/features/skill/skillApi";

const AddSkillModal = () => {
  const [createSkill] = useCreateSkillMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await createSkill(data).unwrap();
    if (res?.data) {
      toast.success(`${res?.message}`);
    }
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Add skill"
        buttonText="Add Skill"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput
              label="Name"
              name="name"
              required

            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Title"
              name="title"
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Image"
              name="image"
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Link"
              name="link"
            ></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Add Skill
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default AddSkillModal;
