import { fireEvent, screen } from '@testing-library/react';
import FilterTextField from '../../components/restaurants/FilterTextField';
import renderWithProviders from '../../testHelper';

const context = describe;

describe('<FilterTextFiled />', () => {
  const text = '메리김밥';
  const setText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderFilterTextField = () => {
    renderWithProviders((<FilterTextField
      text={text}
      setText={setText}
    />
    ));
  };

  it('renders without crash', () => {
    renderFilterTextField();
    screen.getByLabelText('검색');
    screen.getByPlaceholderText('식당 이름을 입력해주세요');
    screen.getByDisplayValue(text);
  });

  context('when the user enters text', () => {
    it('call the change handler', () => {
      renderFilterTextField();
      fireEvent.change(screen.getByLabelText('검색'), { target: { value: 'text' } });
      expect(setText).toBeCalledWith('text');
    });
  });
});
