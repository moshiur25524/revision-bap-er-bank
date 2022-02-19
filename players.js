const players = document.getElementsByClassName('player');
for (const player of players) {
    console.log(player);
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '1opx';
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
}