import ReceiptHeader from './ReceiptHeader';
import ReceiptList from './ReceiptList';
import ResetButton from './ResetButton';

function Receipt() {
  return (
    <div>
      <ReceiptHeader />

      <ReceiptList />

      <ResetButton />
    </div>
  );
}

export default Receipt;
