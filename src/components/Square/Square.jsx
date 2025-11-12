import "./square.styles.css"

export function Square({ value, onSquareClick}) {
    return (
        <>
            <button className="square" onClick={onSquareClick}>{ value }</button>
        </>
    )
}