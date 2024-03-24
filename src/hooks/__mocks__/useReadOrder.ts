import fixtures from '../../../fixtures';

const useReadOrder = jest.fn(() => ({
  receipt: fixtures.receipts[0],
}));

export default useReadOrder;
