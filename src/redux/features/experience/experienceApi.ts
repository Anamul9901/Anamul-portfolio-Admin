import { baseApi } from "../../api/baseApi";

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExperience: builder.query({
      query: () => {
        return {
          url: `/experience/all`,
          method: "GET",
        };
      },
      providesTags: ["experience"],
    }),
    getSingleExperience: builder.query({
      query: (id) => {
        return {
          url: `/experience/${id}`,
          method: "GET",
        };
      },
      providesTags: ["experience"],
    }),

    createExperience: builder.mutation({
      query: (data) => {
        return {
          url: `/experience/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["experience"],
    }),

    updateExperience: builder.mutation({
      query: (data) => {
        return {
          url: `/experience/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["experience"],
    }),

    deleteExperience: builder.mutation({
      query: (id) => {
        return {
          url: `/experience/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["experience"],
    }),
  }),
});

export const {
  useGetAllExperienceQuery,
  useGetSingleExperienceQuery,
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation,
} = experienceApi;
