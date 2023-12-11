import { configureStore } from '@reduxjs/toolkit';

import searchReducer from '../reducer/search';

import cartReducer from '../reducer/cart';

import { restaurantsApiService } from '../services/hooks/useGetRestaurants';

import { orderApiService } from '../services/hooks/usePostOrder';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    [restaurantsApiService.reducerPath]: restaurantsApiService.reducer,
    [orderApiService.reducerPath]: orderApiService.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(restaurantsApiService.middleware)
    .concat(orderApiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
