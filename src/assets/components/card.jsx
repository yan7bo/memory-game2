import shibainu from '../img/01.jpg';

export default Card;

function Card({picture}) {
    return (
        <div>
            <img src={picture} width="500" height="500"></img>
        </div>
    );
};

