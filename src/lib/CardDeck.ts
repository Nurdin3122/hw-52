import Card from './Card.ts';
class CardDeck {
   deck:Card[];
    constructor() {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        this.deck = []

        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card {
        const randomCards = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomCards, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards:Card[] = [];

        for (let i = 0; i < howMany; i++) {

            if (this.deck.length === 0) {
                break;
            }
            cards.push(this.getCard());
        }
        return cards
    }

}
export default CardDeck;