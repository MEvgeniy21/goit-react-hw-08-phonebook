// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://63385ecf937ea77bfdbf0d7e.mockapi.io/api';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, body, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data: body,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: axiosBaseQuery({
    baseUrl: '',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: `/contacts`, method: 'GET' }),
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// export const contactApi = createApi({
//   reducerPath: 'contactApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://63385ecf937ea77bfdbf0d7e.mockapi.io/api/',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contacts'],
//     }),
//     getContactById: builder.query({
//       query: id => `/contacts/${id}`,
//       providesTags: ['Contacts'],
//     }),
//     addContact: builder.mutation({
//       query: newContact => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     updateContact: builder.mutation({
//       query: patch => ({
//         url: `/contacts/${patch.id}`,
//         method: 'PUT',
//         body: patch,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;
