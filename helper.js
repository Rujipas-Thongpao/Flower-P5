function hexagon(posX, posY, radius) {
    const rotAngle = 2 * PI / 6
    beginShape()
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}

function pointOnCircle(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}

function randomSelectTwo(_threshold = .5) {
    return random(1) > _threshold;

}

function randomColor() {
    return pallete[floor(random(pallete.length))];
}

function randomInt(_start = 0, _stop) {
    return floor(random(_start, _stop));
}


function myTriangle(center, radius, direction) {
    angleMode(DEGREES);
    if (direction) {
        beginShape();
        vertex(center + radius * cos(0), radius * sin(0));
        vertex(center + radius * cos(120), radius * sin(120));
        vertex(center + radius * cos(240), radius * sin(240));
        endShape(CLOSE);
    } else {
        beginShape();
        vertex(center + radius * cos(180), radius * sin(180));
        vertex(center + radius * cos(300), radius * sin(300));
        vertex(center + radius * cos(60), radius * sin(60));
        endShape(CLOSE);
    }
    angleMode(RADIANS);
}

class SteppedHexagons extends Layer {
    constructor() {
        super()
        this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25
        this.centerOffset = RADIUS * 0.15
        this.singleStep = (RADIUS - this.centerOffset) / this.numSteps
        this.weight = this.strokeWeight;
    }

    render() {
        stroke(this.color)
        noFill()
        strokeWeight(this.weight)
        push()
        rotate(this.angle / 2)
        for (let i = 1; i < this.numSteps + 1; i++) {
            hexagon(0, 0, this.centerOffset + (i * this.singleStep))
        }
        pop()
    }
}