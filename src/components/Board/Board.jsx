import "./board.styles.css"
import {Square} from "../Square/Square.jsx";

export function Board() {
    return (
        <>
            <div className="board-row">
                <Square value="1" />
                <Square value="1" />
                <Square value="1" />
            </div>
            <div className="board-row">
                <Square value="1" />
                <Square value="1" />
                <Square value="1" />
            </div>
            <div className="board-row">
                <Square value="1" />
                <Square value="1" />
                <Square value="1" />
            </div>
        </>
    )
}