import Menu from "./Menu";

export default function Message() {
    return (
        <>
            <div>
                <img src="images/complete.png" />
                <h1>주문이 완료되었습니다!</h1>
                <p>주문번호 12121212</p>
            </div>
            <hr />
            <Menu />
        </>
    )
}