import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useUpdateBlogMutation } from "@/src/redux/features/blog/blogApi";
import { useUpdateSkillMutation } from "@/src/redux/features/skill/skillApi";

const UpdateSkillModal = ({ skill }: { skill: any }) => {
  const [updateSkill] = useUpdateSkillMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updatableData = { id: skill._id, data };
    const res = await updateSkill(updatableData).unwrap();
    if (res?.data) {
      toast.success(`${res?.message}`);
    }
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Update skill"
        buttonText="Update"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput
              label="Name"
              name="name"
              defaultValue={skill?.name}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Title"
              name="title"
              defaultValue={skill?.title}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Image"
              name="image"
              defaultValue={skill?.image}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Link"
              name="link"
              defaultValue={skill?.link}
            ></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Update Skill
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default UpdateSkillModal;
