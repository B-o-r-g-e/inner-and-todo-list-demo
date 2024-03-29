class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits++;
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }

    isSunk() {
        return this.sunk;
    }
}

// Unit tests
test('Ship hit function', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
    expect(ship.isSunk()).toBe(false);
});

test('Ship isSunk function', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

class Gameboard {
    constructor() {
        this.ships = [];
        this.missedAttacks = [];
    }

    placeShip(ship, coordinates) {
        this.ships.push({ ship, coordinates });
    }

    receiveAttack(coordinates) {
        const hitShip = this.ships.find(({ coordinates }) =>
            coordinates.some(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1])
        );

        if (hitShip) {
            hitShip.ship.hit();
        } else {
            this.missedAttacks.push(coordinates);
        }
    }

    allShipsSunk() {
        return this.ships.every(({ ship }) => ship.isSunk());
    }
}

// Unit tests
test('Gameboard placeShip function', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.placeShip(ship, [[0, 0], [0, 1], [0, 2]]);
    expect(gameboard.ships.length).toBe(1);
});

test('Gameboard receiveAttack function', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.placeShip(ship, [[0, 0], [0, 1], [0, 2]]);
    gameboard.receiveAttack([0, 0]);
    expect(ship.hits).toBe(1);
    gameboard.receiveAttack([1, 0]);
    expect(gameboard.missedAttacks.length).toBe(1);
});

test('Gameboard allShipsSunk function', () => {
    const gameboard = new Gameboard();
    const ship1 = new Ship(2);
    const ship2 = new Ship(3);
    gameboard.placeShip(ship1, [[0, 0], [0, 1]]);
    gameboard.placeShip(ship2, [[1, 0], [1, 1], [1, 2]]);
    ship1.hit();
    ship1.hit();
    ship2.hit();
    ship2.hit();
    ship2.hit();
    expect(gameboard.allShipsSunk()).toBe(true);
});


class Player {
    constructor(gameboard) {
        this.gameboard = gameboard;
    }

    attackEnemyGameboard(enemyGameboard, coordinates) {
        enemyGameboard.receiveAttack(coordinates);
    }
}

// Game loop
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();
const player = new Player(playerGameboard);
const computerPlayer = new Player(computerGameboard);

// Populate gameboards with predetermined coordinates
playerGameboard.placeShip(new Ship(3), [[0, 0], [0, 1], [0, 2]]);
computerGameboard.placeShip(new Ship(3), [[1, 0], [1, 1], [1, 2]]);

while (!playerGameboard.allShipsSunk() && !computerGameboard.allShipsSunk()) {
    // Player's turn
    const playerAttackCoordinates = [prompt('Enter attack x-coordinate:'), prompt('Enter attack y-coordinate:')];
    player.attackEnemyGameboard(computerGameboard, playerAttackCoordinates);

    // Computer's turn (random play)
    const computerAttackCoordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    computerPlayer.attackEnemyGameboard(playerGameboard, computerAttackCoordinates);
}

// Determine the winner
if (playerGameboard.allShipsSunk()) {
    console.log('Computer wins!');
} else {
    console.log('Player wins!')};
