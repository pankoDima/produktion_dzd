const player = document.querySelector(".player")
const finish = document.querySelector(".finish")
const walls = document.querySelectorAll(".wall")
const message = document.querySelector("#message")


let x = 20

let y = 20

let step = 10

document.addEventListener("keydown",(event) => {
  let oldx = x
  let oldy = y //50

    if(event.key == "ArrowRight" || event.key == "d" || event.key == "D") {
        if(x < 660 ){
            x = x + step 
        }
    }
    if(event.key == "ArrowLeft" || event.key == "a" || event.key == "A") {
        if(x > 0) {
        x = x - step
        }
    }
    if(event.key == "ArrowUp" || event.key == "w" || event.key == "W") {
      
        if(y > 0) {
        y = y - step
        }
    }
    if(event.key == "ArrowDown" || event.key == "s" || event.key == "S") {
     
        if(y < 390) {
        y = y + step
        }
    }

    if(x >= 0 && x <= 660 && y >= 0 && y <= 390 ) {
    player.style.left = x + "px"
    player.style.top = y + "px"
    }

    if( isTouching(player,finish)) {
        message.textContent = "You win"
    }
    walls.forEach(wall => {
        if(isTouching(player,wall)) {
            message.textContent = "You hit the wall"

            x = oldx
            y = oldy
            player.style.top = y + "px"
            player.style.left = x + "px"
        }
    })

})


function isTouching(element1, element2) {
 const rect1 = element1.getBoundingClientRect();
 const rect2 = element2.getBoundingClientRect();

return !(
 rect1.right < rect2.left ||
 rect1.left > rect2.right ||
 rect1.bottom < rect2.top ||
 rect1.top > rect2.bottom
);
}
