import { baseApi } from "../../api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkill: builder.query({
      query: () => {
        return {
          url: `/skill/all`,
          method: "GET",
        };
      },
      providesTags: ["skill"],
    }),
    getSingleSkill: builder.query({
      query: (id) => {
        return {
          url: `/skill/${id}`,
          method: "GET",
        };
      },
      providesTags: ["skill"],
    }),

    createSkill: builder.mutation({
      query: (data) => {
        return {
          url: `/skill/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["skill"],
    }),

    updateSkill: builder.mutation({
      query: (data) => {
        return {
          url: `/skill/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["skill"],
    }),

    deleteSkill: builder.mutation({
      query: (id) => {
        return {
          url: `/skill/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["skill"],
    }),
  }),
});

export const {
  useGetAllSkillQuery,
  useGetSingleSkillQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillApi;
