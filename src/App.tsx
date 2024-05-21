
import './App.css'
import Card from "./components/Cards/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import {useState } from "react";

interface Cards {
    rank: string;
    suit:string;
}

const App = () => {
    const [fiveRandomCards,setFiveRandomCards] = useState<Cards[]>([]);


    const getCards = () => {
        const deck = new CardDeck();
        const randomCards = deck.getCards(5);

        setFiveRandomCards(randomCards)
    }

    return (
        <>
            {fiveRandomCards.length > 0 ? <div>
                <div className="playingCards faceImages">
                    {fiveRandomCards.map((card,index) => (
                        <Card rank={card.rank} suit={card.suit} key={index}></Card>
                        ))}
                </div>
                <button onClick={getCards}>click</button>
            </div> : <div>
                <button onClick={getCards}>click</button>
            </div>}

        </>
    )
};

export default App
