import Card  from './Card';
class PokerHand {
     cards:Card[];
    constructor(cards:Card[]) {
        this.cards = cards;
    }
    getOutcome(): string {
        const ranks = this.cards.map(card => card.rank);
        const suits = this.cards.map(card => card.suit);

        if (this.Flush(suits)) {
            return "Флэш";
        } else if (this.ThreeOfAKind(ranks)) {
            return "Тройка";
        } else if (this.TwoPair(ranks)) {
            return "Две пары";
        } else if (this.OnePair(ranks)) {
            return "Одна пара";
        } else {
            return "Старшая карта";
        }
    }

    getRankCounts(ranks: string[]): number[] {
        const rankCounts: { [key: string]: number } = {};
        ranks.forEach(rank => {
            rankCounts[rank] = (rankCounts[rank] || 0) + 1;
        });
        return Object.values(rankCounts);
    }

     Flush(suits: string[]): boolean {
        return new Set(suits).size === 1;
    }


     ThreeOfAKind(ranks: string[]): boolean {
        return this.getRankCounts(ranks).some(count => count === 3);
    }

     TwoPair(ranks: string[]): boolean {
        return this.getRankCounts(ranks).filter(count => count === 2).length === 2;
    }

     OnePair(ranks: string[]): boolean {
        return this.getRankCounts(ranks).some(count => count === 2);
    }
}
export default  PokerHand;