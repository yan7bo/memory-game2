import "../styles/Card.css";

export default Card;

const CARD_SIZE = "100";

function Card({picture, number}) {
    return (
        <div><img src={picture} data-number={number}></img></div>
    );
};

