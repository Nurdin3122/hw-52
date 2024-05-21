
import './App.css'
import Card from "./components/Cards/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";

const App = () => {

    const [deck] = useState(new CardDeck());
    const [randomCards] = useState(deck.getCards(5));

    const getCards = () => {
        console.log(deck)
        console.log(randomCards)
    }

    return (
        <>
        <div className="playingCards faceImages">
            <Card rank={'k'} suit={'diams'}></Card>
            <Card rank={'k'} suit={'spades'}></Card>
        </div>
            <button onClick={getCards}>click</button>
        </>
    )
};

export default App
