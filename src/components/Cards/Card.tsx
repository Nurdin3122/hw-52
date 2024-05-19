import React from "react";

interface Props{
    rank:string;
    suit:string;
}

const suits :{ [key:string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
};
const Card:React.FC<Props> = ({rank,suit}) => {
    const suitsSymbols = suits[suit];
    return (
        <>
             <span className={`card rank-${rank} ${suit}`}>
                <span className="rank">{rank.toUpperCase()}</span>
                <span className="suit">{suitsSymbols}</span>
            </span>


        </>
    );
};
export default Card;