import "./styles/App.css";
import reducer from "./reducer/index";
import { useReducer } from "react";
import initialState from "./utility/script";
import Dashboard from "./component/Dashboard";
import cardContext from "./reducer/context";

function App() {
    const [state, action] = useReducer(reducer, initialState);
    return (
        <cardContext.Provider value={[state, action]}>
            <Dashboard />
        </cardContext.Provider>
    );
}
export default App;
