import { baseApi } from "../../api/baseApi";

const academicSemsterApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getAllAcademicSemesters: builder.query({
         query: () => ({
            url: "/academic-semesters",
            method: "GET",
         }),
      }),
   }),
});

export const { useGetAllAcademicSemestersQuery } = academicSemsterApi;
