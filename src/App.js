import React, {useState} from "react";
import Tetris from "./components/Tetris.tsx";
import HomePage from "./components/HomePage";
import StartGame from "./components/StartGame";

const App = () => {
    const [isTetrisPageVisible, setIsTetrisPageVisible] = useState(false);
    return (
        <div className="App">
            {isTetrisPageVisible ? <Tetris /> : <HomePage setIsTetrisPageVisible={setIsTetrisPageVisible}/>}
        </div>
    )
}
export default App;
