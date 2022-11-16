let add = document.querySelector(".add")
let reset = document.querySelector(".reset")
class Ball {
    x = Math.floor(Math.random() * 250)
    y = Math.floor(Math.random() * 93) + 13
    r = Math.floor(Math.random() * 33) + 2
    xDelta = Math.floor(Math.random() * 5) + 0.5
    yDelta = Math.floor(Math.random() * 5) + 0.5
    color() {
        let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",];
        let hexCode = "";
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * hexNumbers.length)
            hexCode += hexNumbers[randomIndex];
        }
        return '#' + hexCode
    }
    color = this.color()
    moove() {
        this.x += this.xDelta;
        this.y += this.yDelta
    }
}
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
/*let ball = new Ball();
console.log(ball)
context.fillStyle = ball.color;
context.beginPath();
context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
context.fill();*/
let balls = [];
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    balls.forEach(ball => {
        context.fillStyle = ball.color;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
        context.fill();
    })
}
function update() {
    balls.forEach(ball => {
        if (ball.x <= 0 || ball.x >= canvas.width) {
            ball.xDelta *= -1
        }
        if (ball.y <= 0 || ball.y >= canvas.height) {
            ball.yDelta *= -1
        }
        ball.moove()
    })
}

add.onclick = () => balls.push(new Ball());
reset.onclick = () => location.reload()
function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}
loop()