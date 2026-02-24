let currMoleTile;


window.onload = function(){
    setGame();
}

function setGame(){
//set up the grid for the game boaard in html
    for(let i=1; i<=9; i++){ // i goes from 0 to 8, stop at 9
        // div id= "0-8"
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 2000);  //2000 miliseconds = 2 seconds
}

function getRandomTile() {
    //math.random --> (0-1) *9= (0-9) --> round down to (0-8)integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}