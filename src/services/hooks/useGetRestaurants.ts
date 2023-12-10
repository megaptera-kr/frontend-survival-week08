import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseURL } from '../apis';

import { Restaurants } from '../../types';

export const restaurantsApiService = createApi({
  reducerPath: 'restaurantsApi',

  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants, void>({
      query: () => 'restaurants',
    }),
  }),
});

export const { useGetRestaurantsQuery } = restaurantsApiService;
