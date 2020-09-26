let direction = 'right';

let avatarCoordinates = [0, 0]

let boardVals = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
]

function createBoard() {
    const board = document.querySelector('.board');
    board.innerHTML = ''
    const avatar = document.createElement('div')
    avatar.classList.add('avatar')
    avatar.innerHTML = '>'
    avatar.classList.add(`direction-${direction}`)
    for (let i in boardVals) {
        const row = document.createElement('div')
        row.classList.add('row')
        for (let j in boardVals[i]) {
            const cel = document.createElement('div')
            cel.classList.add('cel')
            row.appendChild(cel)
            if (i == avatarCoordinates[0] && j == avatarCoordinates[1]) {
                cel.appendChild(avatar)
            }
        }
        board.appendChild(row);
    }
    
}

createBoard()

function toggleDirection() {
    if (direction === 'right') {
        direction = 'down'
    } else if (direction === 'left') {
        direction = 'up'
    } else if (direction === 'down') {
        direction = 'left'
    } else if (direction === 'up') {
        direction = 'right'
    }
    createBoard()
}


function moveForward() {
    if (direction === 'right') {
        avatarCoordinates[1]++
    } else if (direction === 'down') {
        avatarCoordinates[0]++
    } else if (direction === 'left') {
        avatarCoordinates[1]--
    } else if (direction === 'up') {
        avatarCoordinates[0]--
    }
    if (avatarCoordinates[0] < 0) {
        avatarCoordinates[0] = 0
    } else if (avatarCoordinates[1] < 0) {
        avatarCoordinates[1] = 0
    }

    if (avatarCoordinates[0] > 9) {
        avatarCoordinates[0] = 9
    } else if (avatarCoordinates[1] > 9) {
        avatarCoordinates[1] = 9
    }

    createBoard()
}