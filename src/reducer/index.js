function reducer(state, action) {
    switch (action.type) {
        case ACTION.DRAW_CARD:
            let newState = { ...state };
            newState.givenCards.push(newState.drawDeck.pop());
            return newState;

        case ACTION.DISCARD_CARD:
            let myCard = action?.payload;
            console.log({ myCard });
            // Remove card , (send index of card )
            let newOpenCardState = { ...state };
            newOpenCardState.givenCards.splice(action.payload.cardInd, 1);
            // update card
            newOpenCardState.openCard = myCard;
            return newOpenCardState;

        default:
            return state;
    }
}

const ACTION = {
    DRAW_CARD: "DRAW_CARD",
    DISCARD_CARD: "DISCARD_CARD",
};

export default reducer;
