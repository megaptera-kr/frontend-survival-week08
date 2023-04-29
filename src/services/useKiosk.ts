import { useNavigate, useSearchParams } from 'react-router-dom';
import type { AxiosError } from 'axios';
import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationOptions,
} from '@tanstack/react-query';

import * as type from '../types/kiosk';
import * as api from '../apis/kiosk';
import PATH from '../constants/path';
import { filterRestaurants } from '../utils/restaurants';

const restaurantsKey = {
  all: ['restaurants'] as const,
};

const orderInfoKey = {
  all: ['orderInfo'] as const,
  lists: () => [...orderInfoKey.all, 'list'] as const,
  list: (filters: type.OrderInfoRequest) => [...orderInfoKey.lists(), { filters }] as const,
};

export const useFetchRestaurants = (): UseQueryResult<type.Restaurant[]> => {
  const [searchParams] = useSearchParams();

  const filters = {
    search: searchParams.get('search') ?? '',
    category: searchParams.get('category') ?? '전체',
  };
  return useQuery(restaurantsKey.all, api.fetchRestaurants, {
    select: (res: type.RestaurantsResponse) => filterRestaurants(res.restaurants, filters),
  });
};

export const useOrderCart = (
  options?: UseMutationOptions<unknown, AxiosError, type.OrderRequest>,
) => useMutation((req) => api.orderCart(req), {
  ...options,
});

export const useFetchOrderInfo = (orderId: string | null)
: UseQueryResult<type.OrderInfo> => {
  const navigate = useNavigate();

  const req = { id: orderId as string };

  return useQuery(
    orderInfoKey.list(req),
    () => api.fetchOrderInfo(req),
    {
      enabled: !!orderId,
      select: (res: type.OrderInfoResponse) => res.order,
      onError: () => {
        navigate(PATH.ROOT);
      },
    },
  );
};
