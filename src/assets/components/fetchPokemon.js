
async function getOnePoke(number) {
    let pokeImgSrc =
    await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`, {mode: "cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            // pokeImgSrc.push(response.sprites.front_default);
            // console.log(pokeImgSrc[0]);
            return response.sprites.front_default;
        });
    
    // console.log(pokeImgSrc);
    return pokeImgSrc;
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
};

async function getPokes() {
    let arr = [];
    for (let i = 1; i < 152; i++) {
        arr.push(i);
    };
    arr = shuffle(arr);

    let pokes = [];

    for (let i = 0; i < 9; i++) {
        const temp = await getOnePoke(arr[i]);
        pokes.push(temp);
    };

    return pokes;
}

export default getPokes;