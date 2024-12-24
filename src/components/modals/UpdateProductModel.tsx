import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import Loading from "../UI/loading";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FXModal from "./FXModal";

const UpdateProductModal = ({ product }: { product: any }) => {

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
   
  };

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <FXModal
        title="Update Product"
        buttonText="📝"
        buttonClassName="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all"
      >
        <FXForm onSubmit={onSubmit}>
          <div className="py-1">
            <FXInput
              label="Name"
              name="name"
              defaultValue={product?.name}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Title"
              name="title"
              defaultValue={product?.title}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Category"
              name="category"
              defaultValue={product?.category}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Price"
              name="price"
              type="number"
              defaultValue={product?.price}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Quantity"
              name="inventoryCount"
              type="number"
              defaultValue={product?.inventoryCount}
              required
            ></FXInput>
          </div>
          <div className="py-1">
            <FXInput
              label="Images"
              name="images"
              defaultValue={product?.images}
            ></FXInput>
          </div>
          <div className="flex justify-center pt-2 w-full pb-2">
            <Button className="w-full" type="submit">
              Add Product
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default UpdateProductModal;