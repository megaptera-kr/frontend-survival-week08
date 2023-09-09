import { useNavigate } from 'react-router';

export default function EntryPage() {
  const navigate = useNavigate();
  const handleClickLinkBtn = () => {
    navigate({ pathname: '/order' });
  };

  return (
    <div>
      <h2>원하시는 주문을 터치해주세요</h2>
      <div>
        <button type="button" onClick={handleClickLinkBtn}>매장 주문</button>
        <button type="button" onClick={handleClickLinkBtn}>전체 포장</button>
      </div>
    </div>
  );
}
