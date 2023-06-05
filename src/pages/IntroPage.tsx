import { useNavigate } from "react-router"


export default function IntroPage() {

    const navigate = useNavigate();

    const handleClickNext = () => {
        navigate('/order');
    }

    return (
        <>
            <h1>원하시는 주문을 터치해주세요</h1>
            <div onClick={handleClickNext}>
                <img src="images/fastfood.png" alt="forHere" />
                <p>매점 주문</p>
            </div>
            <div onClick={handleClickNext}>
                <img src="images/bag.png" alt="toGo" />
                <p>전체 포장</p>
            </div>
        </>
    )
}