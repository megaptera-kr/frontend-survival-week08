import { useCallback } from 'react';

import useAppSelector from '../../../hooks/useAppSeletor';

import useAppDispatch from '../../../hooks/useAppDispatch';

import { updateCategory, updateQuery } from '../../../reducer/search';

import checkCategoryType from '../../../utils/checkCategoryType';

export default function useSearch() {
  const { query, category } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const handleChangeQuery = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      dispatch(updateQuery(value));
    },
    [dispatch],
  );

  const handleClickCategory = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = e.currentTarget;

      if (category !== value && checkCategoryType(value)) {
        dispatch(updateCategory(value));
      }
    },
    [dispatch, category],
  );

  return {
    query,
    category,
    handleChangeQuery,
    handleClickCategory,
  };
}
