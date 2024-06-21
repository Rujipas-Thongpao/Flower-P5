const RADIUS = 100;
let pallete = [];
let side;
const layers = []
const flowers = []
const scale = 100;
const noiseThreshold = .6;
function setup() {
    side = randomSelectTwo() ? 6 : 12;
    createCanvas(windowWidth - 20, windowHeight - 20);
    pallete = [
        color(234, 157, 52), // gold
        color(215, 130, 126), // rose
        color(86, 148, 159), // Foam 
        color(144, 122, 169), // iris
    ]
    rectMode(CENTER);
    for (var x = 0; x < width; x += scale) {
        for (var y = 0; y < height; y += scale) {
            var c = noise(0.01 * x, 0.01 * y);
            if (c > noiseThreshold) {
                flowers.push(new Flower(map(c, noiseThreshold, 1, 30, 200), x, y));
            }
        }
    }
}



function draw() {
    background(color(255, 250, 243));
    flowers.forEach(flower => {
        flower.render()
    }
    );

}

