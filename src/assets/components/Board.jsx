import Card from './card.jsx';
import testimg from '../img/02.jpg';

export default Board;

function Board() {
    const NUMBER_CARDS = 9;
    let cards = [];
    /*
    for (let i = 0; i < NUMBER_CARDS; i++) {
        cards.push(<Card)
    }
    */
    return (
        <Card 
            picture={testimg}
        />
    );
};