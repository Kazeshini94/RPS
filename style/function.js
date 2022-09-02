let img = document.getElementsByTagName("img")
let p = document.getElementsByTagName("p")
let section = document.getElementsByTagName("section")
let div = document.getElementsByTagName("div")

const one = document.createElement("img")
const two = document.createElement("img")


function enemyMove() {
    return img[Math.floor(Math.random() * 3)];
}

function removeNodes() {
    img[0].remove()
    one.remove()
    two.remove()
    p[0].style.fontSize = "200%"
}

function playRock() {
    if (enemyMove().src === img[0].src) {
        removeNodes();
       return p[0].innerHTML = "Draw"
    }

    if (enemyMove().src === img[1].src) {
        removeNodes();
        return p[0].innerHTML = "You Loose"
    }

    if (enemyMove().src === img[2].src) {
        removeNodes();
      return p[0].innerHTML = "You Win"
    }
}

function playPaper() {
    if (enemyMove().src === img[0].src) {
        removeNodes();
        return p[0].innerHTML = "You Win"
    }

    if (enemyMove().src === img[1].src) {
        removeNodes();
        return p[0].innerHTML = "Draw"
    }

    if (enemyMove().src === img[2].src) {
        removeNodes();
        return p[0].innerHTML = "You Loose"
    }
}

function playScissor() {

    if (enemyMove().src === img[0].src) {
        removeNodes();
       return p[0].innerHTML = "You Loose"
    }

    if (enemyMove().src === img[1].src) {
        removeNodes();
        return p[0].innerHTML = "You Win"
    }

    if (enemyMove().src === img[2].src) {
        removeNodes();
        return p[0].innerHTML = "Draw"
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

    p[0].innerText = "Click on the Image to Start the Game"

    img[0].onclick = changeContent;

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

    img[0].onclick = playRock;
    img[1].onclick = playPaper;
    img[2].onclick = playScissor;

    setTimeout(backToStart, 6000)
}





