import React from "react";
import StartGame from "./StartGame";

interface HomePageProps {
    setIsTetrisPageVisible: (value: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setIsTetrisPageVisible }) =>  {
    return (
        <div>
            <h1> TETRIS </h1>
            <StartGame onClick={(event) => setIsTetrisPageVisible(true)} />
        </div>
    )
}

export default HomePage;