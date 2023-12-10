import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseURL } from '../apis';
import { OrderRes } from '../../types';

export const orderApiService = createApi({
  reducerPath: 'ordersApi',

  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: (order) => ({
        url: '/orders',
        method: 'POST',
        body: order,
      }),
    }),

    getOrder: builder.query<OrderRes, string | undefined>({
      query: (id) => `/orders/${id}`,
    }),
  }),
});

export const { usePostOrderMutation, useGetOrderQuery } = orderApiService;
