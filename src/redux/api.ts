import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = "/";

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: backendURL,
        prepareHeaders: (headers: Headers, args: { getState: any }) => {
            const token = args.getState().auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["User"] as const,

    endpoints: (builder) => ({
        // AUTHORIZATION
        register: builder.mutation({
            query: (user: any) => ({
                url: `/authApi/sign_up`,
                method: 'POST',
                body: user,
            }),
        }),
        login: builder.mutation({
            query: (user: any) => ({
                url: `/authApi/login`,
                method: 'POST',
                body: user,
            }),
        }),
        // GET USER INFO
        getUser: builder.query({
            query: () => ({
                url: `/authApi/account`,
                method: 'GET',
            }),
            providesTags: ["User"]
        }),
       
    })
});
export default api;
export const {
    // Authorization
    useRegisterMutation,
    useLoginMutation,
    // User Information
    useGetUserQuery,
} = api;
