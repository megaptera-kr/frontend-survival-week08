import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import { Categories } from '../types';

export interface SearchState {
  query: string;
  category: Categories;
}

const initialState: SearchState = {
  query: '',
  category: '전체',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => ({
      ...state,
      query: action.payload,
    }),

    updateCategory: (state, action: PayloadAction<Categories>) => ({
      ...state,
      category: action.payload,
    }),

    resetSearch: (state) => ({
      ...state,
      category: '전체',
      query: '',
    }),
  },
});

export const { updateQuery, updateCategory, resetSearch } = searchSlice.actions;

export default searchSlice.reducer;
