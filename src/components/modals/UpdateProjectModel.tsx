import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useUpdateProjectMutation } from "@/src/redux/features/project/projectApi";

const UpdateProjectModal = ({ project }: { project: any }) => {
  const [updateProject] = useUpdateProjectMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updatableData = { id: project._id, data };
    const res = await updateProject(updatableData).unwrap();
    if (res?.data) {
      toast.success(`${res?.message}`);
    }
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Update project"
        buttonText="Update"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput
              label="Name"
              name="name"
              defaultValue={project?.name}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Description"
              name="description"
              defaultValue={project?.description}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Image"
              name="image"
              defaultValue={project?.image}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Frontend live"
              name="frLive"
              defaultValue={project?.frLive}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Backend live"
              name="bcLive"
              defaultValue={project?.bcLive}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Frontend repository"
              name="frRepo"
              defaultValue={project?.frRepo}
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Backend repository"
              name="bcRepo"
              defaultValue={project?.bcRepo}
            ></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Update Project
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default UpdateProjectModal;
