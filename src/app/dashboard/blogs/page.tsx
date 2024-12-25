"use client";
import AddBlogModal from "@/src/components/modals/AddBlogModel";
import {
  useDeleteBlogMutation,
  useGetAllBlogQuery,
} from "@/src/redux/features/blog/blogApi";
import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";

const BlogPage = () => {
  const { data: getBlogs, isLoading, error } = useGetAllBlogQuery(undefined);
  const blogs = getBlogs?.data;
  const [deleteBlog] = useDeleteBlogMutation();

  const handleBlogDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can't revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deleted!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteBlog(id).unwrap();
        console.log("res", res);
        if (res?.data) {
          toast.success(`${res?.message}`);
        }
      }
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blogs.</div>;
  }

  return (
    <div className="blog-page">
      <div className="flex justify-between py-6">
        <h1 className="text-2xl font-bold mb-4">Blogs</h1>
        <AddBlogModal />
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border ">
          <thead>
            <tr className="">
              <th className="border  px-4 py-2 text-left">#</th>
              <th className="border  px-4 py-2 text-left">Image</th>
              <th className="border  px-4 py-2 text-left">Name</th>
              <th className="border  px-4 py-2 text-left">Description</th>
              <th className="border  px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog: any, index: number) => (
              <tr key={blog._id} className="hover:bg-gray-900">
                <td className="border  px-4 py-2">{index + 1}</td>
                <td className="border  px-4 py-2">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="border  px-4 py-2">{blog.name}</td>
                <td className="border  px-4 py-2">{blog.description}</td>
                <td className="border  px-4 py-2">
                  <Link
                    href={`/dashboard/blogs/${blog._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleBlogDelete(blog._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogPage;
