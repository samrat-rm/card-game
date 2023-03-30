import React, { useContext } from "react";
import Card from "./Card";
import cardContext from "../reducer/context";
import cardBG from "../assets/images/card_bg.svg";
import "../styles/dashboard.css";
import OpenCard from "./OpenCard";

function Dashboard() {
    const [state, action] = useContext(cardContext);

    const GivenCardComp = state.givenCards.map((card, ind) => {
        return (
            <Card cardInd={ind} key={ind} suit={card.suit} value={card.value} />
        );
    });
    function drawCard() {
        if (state.givenCards.length > 0) {
            action({ type: "DRAW_CARD" });
        } else {
            alert("You won");
        }
    }
    return (
        <div>
            {" "}
            <div className="draw-card-container">
                <button className="draw-card" onClick={drawCard}>
                    <p>Draw a card </p>
                    <img src={cardBG} className="bg-image" alt="" />
                </button>
                <OpenCard bgColor={"black"} />
            </div>
            {GivenCardComp.length > 0 ? (
                <div className="given-card-continer">{GivenCardComp}</div>
            ) : (
                <h1 className="winner">Winner</h1>
            )}
        </div>
    );
}

export default Dashboard;
