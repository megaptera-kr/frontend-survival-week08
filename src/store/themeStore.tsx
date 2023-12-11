import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
class ThemeStore {
  isDarkMode = false;

  @Action()
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
}

export default ThemeStore;
