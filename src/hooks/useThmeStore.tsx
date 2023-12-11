import 'reflect-metadata';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ThemeStore from '../store/themeStore';

export default function useThemeStore() {
  const store = container.resolve(ThemeStore);
  return useStore(store);
}
