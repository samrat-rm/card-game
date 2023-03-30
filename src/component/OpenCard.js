import React, { useContext } from "react";
import Card from "./Card";
import cardContext from "../reducer/context";
import "../styles/openCard.css";

function OpenCard({ bgColor }) {
    const [state, action] = useContext(cardContext);
    return (
        <div className="open-card-container">
            <h3 className="open-card-title">Open card</h3>
            {
                <Card
                    suit={state.openCard.suit}
                    bgColor={bgColor}
                    value={state.openCard.value}
                    openCard={true}
                />
            }
        </div>
    );
}

export default OpenCard;
