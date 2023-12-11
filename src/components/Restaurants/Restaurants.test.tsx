import 'jest-styled-components';
import Restaurants from './Restaurants';
import { getRestaurants } from '../../services/getRestaurants';
import useRender from '../../hooks/usdRender';

const context = describe;

describe('불러온 레스토랑 리스트가 있다.', () => {
  context('레스토랑 리스트를 화면에 뿌려준다.', () => {
    it('레스토랑 리스트가 화면에 보인다.', async () => {
      const { restaurants } = await getRestaurants();
      useRender(<Restaurants restaurants={restaurants} />);
    });
  });
});
