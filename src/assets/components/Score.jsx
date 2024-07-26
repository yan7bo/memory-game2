import { useState } from 'react';

export default Score;

function Score({choices}) {
    const [count, setCount] = useState(0);

    return (
        <div className="score-container">
            <p>{count}</p>
        </div>
    );
};