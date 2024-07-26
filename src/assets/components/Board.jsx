import { useState, useEffect } from 'react'
import Card from './card.jsx';
import images from '../img/importcardimgs.js';
import getPokes from "./fetchPokemon.js";
import "../styles/Board.css";

export default Board;

const listOfCards = images.map((picture, index) => <
    Card
    picture={picture}
    key={index}
    number={index}
    />
);

let pokes = await getPokes();

const pokeCards = pokes.map((picture, index) => <
    Card
    picture={picture}
    key={index}
    number={index}
    />
);

function Board() {
    const [choices, setChoices] = useState([]);
    const [topScore, setTopScore] = useState(0);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
        return array;
    };

    function checkChoices(current, choices) {
        for (const element of choices) {
            if (current == element) {
                return false;
            };
        };
        return true;
    };
    
    const handleBoardClick = (e) => {
        let current = e.target.dataset.number;
        const newChoices = [...choices];
        console.log(newChoices);
        if (checkChoices(current, choices)) {
            newChoices.push(e.target.dataset.number);
            setChoices(newChoices);
            console.log(`correct choice, score: ${newChoices.length}`);
            if (newChoices.length > topScore) {
                setTopScore(newChoices.length);
            };
        } else {
            console.log(`incorrect choice. Game Over! Total score: ${newChoices.length}`);
            setChoices([]);
        };
        
        shuffle(pokeCards);
    };

    return (
        <>
            
            <div className="game-container" onClick={handleBoardClick}>
                <p>Current Score: {choices.length}</p>
                <p>Top Score: {topScore}</p>
                <div className="board-container">
                    {pokeCards }
                </div>
            </div>
            
        </>
        
    );
};