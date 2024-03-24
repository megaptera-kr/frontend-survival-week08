import Message from './Message';
import Menu from './Menu';
import Button from '../common/Button';

import useFetchReceipt from '../../hooks/useFetchReceipt';

import PageCommonWrapStyle from '../../styles/PageCommonWrapStyle';

type OrderProps = {
  orderId: string;
  onClickBack: () => void;
};

export default function Order({ orderId, onClickBack }: OrderProps) {
  const order = useFetchReceipt(orderId);

  return (
    <PageCommonWrapStyle>
      <Message order={order} />
      {order.id && <Menu order={order} />}
      <Button
        text="메인화면으로 돌아가기"
        active="fullPrimary"
        onClick={onClickBack}
      />
    </PageCommonWrapStyle>
  );
}
