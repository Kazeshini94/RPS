let img = document.getElementsByTagName("img")
let p = document.getElementsByTagName("p")
let div = document.getElementsByTagName("div")

const one = document.createElement("img")
const two = document.createElement("img")

let rounds, loose, win;

function gameMode() {
    rounds = prompt("How many Rounds you dare to play?")
    win = 0;
    loose = 0;
}

function enemyMove() {
    return img[Math.floor(Math.random() * 3)]
}

function removeNodes() {
    img[0].remove()
    one.remove()
    two.remove()
    p[0].style.fontSize = "200%"
}

function winCondition() {
    if (win > loose) {
        removeNodes();
        p[0].style.fontSize = "300%"
        p[0].style.color = "#12d70e"
        p[0].innerHTML = "! Congrats you Won !"
    }
    if (win < loose) {
        removeNodes();
        p[0].style.fontSize = "300%"
        p[0].style.color = "#f10404"
        p[0].innerHTML = "You Lost This Round !"
    }
    if (win === loose) {
        removeNodes();
        p[0].style.fontSize = "300%"
        p[0].style.color = "#f1d805"
        p[0].innerHTML = " Draw "
    }
}

function playRock() {
    if (parseInt(rounds) !== 0) {
        if (enemyMove().src === img[0].src) {
            rounds--
            return p[0].innerHTML = "Draw"
        }

        if (enemyMove().src === img[1].src) {
            rounds--
            loose++
            return p[0].innerHTML = "You Loose"
        }

        if (enemyMove().src === img[2].src) {
            rounds--
            win++
            return p[0].innerHTML = "You Win"
        }
    }
    if (parseInt(rounds) === 0) {
       return winCondition()
    }
}

function playPaper() {
    if (parseInt(rounds) !== 0) {
        if (enemyMove().src === img[0].src) {
            rounds--
            win++
            return p[0].innerHTML = "You Win"
        }

        if (enemyMove().src === img[1].src) {
            rounds--
            return p[0].innerHTML = "Draw"
        }

        if (enemyMove().src === img[2].src) {
            rounds--
            loose++
            return p[0].innerHTML = "You Loose"
        }
    }
    if (parseInt(rounds) === 0) {
       return winCondition()
    }
}

function playScissor() {
    if (parseInt(rounds) !== 0) {
        if (enemyMove().src === img[0].src) {
            rounds--
            loose++
            return p[0].innerHTML = "You Loose"
        }
        if (enemyMove().src === img[1].src) {
            rounds--
            win++
            return p[0].innerHTML = "You Win"
        }
        if (enemyMove().src === img[2].src) {
            rounds--
            return p[0].innerHTML = "Draw"
        }
    }
    if (parseInt(rounds) === 0) {
       return winCondition()
    }
}

function backToStart() {
    if (img.item(0)) {
        removeNodes()
    }

    const image = document.createElement("img")
    div[0].appendChild(image)

    img[0].src = "media/baseLogo.jpg"
    img[0].style.width = "50%"

    p[0].style.color = "#fff"
    p[0].style.fontSize = "100%"
    p[0].innerText = "Click on the Image to Start the Game"

    img[0].onclick = changeContent

    gameMode()
}

function changeContent() {
    img[0].src = "media/rock.png"
    img[0].style.width = "22%"
    img[0].style.height = "auto"

    p[0].innerHTML = "! Choose your Move wisely !"

    div[0].append(one, two)
    one.src = "media/paper.png"
    two.src = "media/scissor.png"

    img[1].style.width = "22%"
    img[1].style.height = "auto"

    img[2].style.width = "22%"
    img[2].style.height = "auto"

    img[0].onclick = playRock
    img[1].onclick = playPaper
    img[2].onclick = playScissor

    setTimeout(backToStart, 6000)
}





