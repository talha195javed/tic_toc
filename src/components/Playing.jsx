import React, {useContext, useState} from "react";
import {AppContext} from "../App";

function Playing() {
    const {currentChar} = useContext(AppContext);

    const playingNowStyle = {
        color: "black",
        fontWeight: "Bolder",
        paddingBottom: "40%",
        fontFamily: "cursive",
    };

    return (
        <div style={playingNowStyle}>
            Playing now: <span>{currentChar}</span>
        </div>
    );
}


export default Playing