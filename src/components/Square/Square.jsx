import "./square.styles.css"

function HandleClick() {
    console.log("Clicked!");
}
export function Square({ value }) {
    return (
        <>
        <button
            className="square"
            onClick={HandleClick}>
            { value }
        </button>
        </>
    )
}