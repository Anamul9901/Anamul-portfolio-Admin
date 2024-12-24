import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: () => {
        return {
          url: `/blog/all`,
          method: "GET",
        };
      },
      providesTags: ["blog"],
    }),
    
    getSingleBlog: builder.query({
      query: (id) => {
        return {
          url: `/blog/${id}`,
          method: "GET",
        };
      },
      providesTags: ["blog"],
    }),

    createBlog: builder.mutation({
      query: (data) => {
        return {
          url: `/blog/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["blog"],
    }),

    updateBlog: builder.mutation({
      query: (data) => {
        return {
          url: `/blog/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["blog"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `/blog/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllBlogQuery,
  useGetSingleBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
