import React, { useContext } from "react";
import cardContext from "../reducer/context";
import "../styles/card.css";

function Card({ suit, value, cardInd, openCard }) {
    const [state, action] = useContext(cardContext);
    let classVariables =
        suit === "♦️" || suit === "❤" ? "color-red" : "color-black";
    classVariables += value === "6" || value === "9" ? " six" : "";
    function discardCard() {
        if (openCard) {
            return console.log("this is the open card");
        }
        if (state.openCard.suit === suit || state.openCard.value === value) {
            action({
                type: "DISCARD_CARD",
                payload: {
                    suit,
                    value,
                    cardInd,
                },
            });
        } else {
            alert("Card dosen't match the open card");
        }
    }
    return (
        <div className="card-container" onClick={discardCard}>
            <p className={`${classVariables}  cardValue left`}>{value}</p>
            <p className={`${classVariables.replace("six", "")} suit `}>
                {suit}
            </p>
            <p className={`${classVariables} cardValue right`}>{value}</p>
        </div>
    );
}

export default Card;
