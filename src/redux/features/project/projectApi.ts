import { baseApi } from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProject: builder.query({
      query: () => {
        return {
          url: `/project/all`,
          method: "GET",
        };
      },
      providesTags: ["project"],
    }),
    
    getSingleProject: builder.query({
      query: (id) => {
        return {
          url: `/project/${id}`,
          method: "GET",
        };
      },
      providesTags: ["project"],
    }),

    createProject: builder.mutation({
      query: (data) => {
        return {
          url: `/project/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["project"],
    }),

    updateProject: builder.mutation({
      query: (data) => {
        return {
          url: `/project/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["project"],
    }),

    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: `/project/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useGetAllProjectQuery,
  useGetSingleProjectQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
