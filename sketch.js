let x = 0;
let y = 0;
let easing = .1;

function setup() {
    createCanvas( windowWidth, windowHeight );

}

function draw() {
    background(3, 244, 252);
    let targetX = mouseX;
    x += (targetX - x) * easing;

    let targetY = mouseY;
    y += (targetY - y) * easing;

    ellipse(x, y, 50, 50);
}

function windowResized() {
    resizeCanvas( windowWidth, windowHeight );
} // 웹브라우저 만들 때 추가