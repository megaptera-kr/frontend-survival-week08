import CartItems from "./CartItems"
import OperationButtons from "./OperationButtons"
import Summary from "./Summary"

export default function Cart() {
    return (
        <>
            <Summary />
            <CartItems />
            <OperationButtons />
        </>
    )
}