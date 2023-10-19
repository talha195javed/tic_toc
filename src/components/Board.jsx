import React from "react";
import Cell from "./Cell";
import styles from '../style/board.module.css';

function Board() {

    const cellStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    };

    return (
        <div className="board">
            <div className={styles.row}>
                <div style={cellStyle}>
                    <Cell row={0} column={0} />
                    <Cell row={0} column={1} />
                    <Cell row={0} column={2} />
                </div>
                <div style={cellStyle}>
                    <Cell row={1} column={0} />
                    <Cell row={1} column={1} />
                    <Cell row={1} column={2} />
                </div>
                <div style={cellStyle}>
                    <Cell row={2} column={0} />
                    <Cell row={2} column={1} />
                    <Cell row={2} column={2} />
                </div>
            </div>
        </div>
    );
}

export default Board;
