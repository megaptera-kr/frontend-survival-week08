import { useParams } from 'react-router';

import { useGetOrderQuery } from '../../../services/hooks/usePostOrder';

export default function useGetOrderInfo() {
  const { id } = useParams();

  const { data, isLoading } = useGetOrderQuery(id, { skip: !id });

  return { order: data?.order, isLoading };
}
