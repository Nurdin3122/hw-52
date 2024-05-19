
import './App.css'
import Card from "./components/Cards/Card.tsx";

const App = () => {
    return (
        <div className="playingCards faceImages">
            <Card rank={'k'} suit={'diams'}></Card>
            <Card rank={'k'} suit={'spades'}></Card>
        </div>
    )
};

export default App
