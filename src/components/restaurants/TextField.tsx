type TextFieldProps = {
    text: string;
    setText: (text: string) => void;
}

export default function TextField({
    text, setText
}: TextFieldProps) {
    return (
        <div>
            <input
                placeholder="식당이름을 입력해주세요"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <img src="images/icon-search.png" />
        </div>
    )
}