import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useCreateProjectMutation } from "@/src/redux/features/project/projectApi";

const AddProjectModal = () => {
const [addProject] = useCreateProjectMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
   const res = await addProject(data).unwrap();
   if(res.data){
    toast.success(`${res.message}`)
   }
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Add project"
        buttonText="Add Project"
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
              label="Description"
              name="description"
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
              label="Frontend live"
              name="frLive"
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Backend live"
              name="bcLive"
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Frontend repository"
              name="frRepo"
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Backend repository"
              name="bcRepo"
            ></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Add Project
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default AddProjectModal;
