"use client";

import UpdateBlogModal from "@/src/components/modals/UpdateBlogModel";
import { useGetSingleBlogQuery } from "@/src/redux/features/blog/blogApi";
import { useParams } from "next/navigation";

const SingleBlog = () => {
  const { singleBlog: blogId } = useParams();
  const { data: singleBlog, isLoading, error } = useGetSingleBlogQuery(blogId);
  const blog = singleBlog?.data;

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">Error loading blog.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Single Blog</h1>
      {blog ? (
        <div className="flex flex-col items-center gap-6">
          {/* Blog Header */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{blog.name}</h2>
            <h3 className="text-lg text-gray-600 mt-2">{blog.title}</h3>
          </div>

          {/* Blog Image */}
          <div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>

          {/* Blog Description */}
          <div className="text-justify text-gray-700 leading-relaxed">
            <p>{blog.description}</p>
          </div>

          {/* Blog Details */}
          <div className="flex flex-col items-start gap-2 mt-4">
            <p>
              <span className="font-medium">Reading Time:</span>{" "}
              {blog.readingTime} min
            </p>
            <p>
              <span className="font-medium">Created At:</span>{" "}
              {new Date(blog.createdAt).toLocaleString()}
            </p>
            <p>
              <span className="font-medium">Updated At:</span>{" "}
              {new Date(blog.updatedAt).toLocaleString()}
            </p>
          </div>
          <div>
            <UpdateBlogModal blog={blog} />
          </div>
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">No blog found.</div>
      )}
    </div>
  );
};

export default SingleBlog;
