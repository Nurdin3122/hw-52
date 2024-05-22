
import './App.css'
import Card from "./components/Cards/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";
import PokerHand from "./lib/PokerHand";

interface Cards {
    rank: string;
    suit:string;
}
const App = () => {
    const [fiveRandomCards,setFiveRandomCards] = useState<Cards[]>([]);
    const [pokerHandsText,setPokerHands] = useState<string>('')

    const getCards = () => {
        const deck = new CardDeck();
        const randomCards = deck.getCards(5);
        setFiveRandomCards(randomCards)
        const pokerHand = new PokerHand(randomCards);
        setPokerHands(pokerHand.getOutcome())
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
               <p>{pokerHandsText}</p>
            </div> : <div>
                <button onClick={getCards}>click</button>
            </div>}
        </>
    )
};

export default App
