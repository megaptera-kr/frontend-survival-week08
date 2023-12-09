import Main from '../pages/Main/Main';
import Complete from '../pages/Complete/Complete';
import Order from '../pages/Order/Order';

const Routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/complete',
    element: <Complete />,
  },
];

export default Routes;
