class Layer {
    constructor(_size = RADIUS) {
        this.side = randomSelectTwo() ? 6 : 10;
        this.color = randomColor();
        this.strokeWeight = randomInt(1, 5);
        this.numShapes = this.side;
        this.angle = 2 * PI / this.numShapes
        this.shapeSize = random(.5, 3);
        this.stepsOut = 8
        this.size = _size;
        this.singleStep = this.size / this.stepsOut
        this.curAngle = 0;
        this.angleOffset = random(-.01, .01);
    }


}

class Circles extends Layer {
    constructor(_size = RADIUS) {
        super(_size);
        this.side = randomSelectTwo() ? 6 : 10;
        this.color.setAlpha(random(255));
    }

    render() {
        push();
        this.curAngle += this.angleOffset;
        rotate(this.curAngle);
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        const circleSize = this.size * .93;
        noFill();
        for (let i = 0; i < this.side; i++) {
            ellipse(0, this.size - circleSize / 2, circleSize);
            rotate(2 * PI / 6);
        }
        pop();
    }
}


class OutlineShape extends Layer {
    constructor(_size = RADIUS) {
        super(_size);
        this.isHexagon = randomSelectTwo();
        this.color.setAlpha(random(255));
    }
    render() {

        push()
        this.curAngle += this.angleOffset;
        rotate(this.curAngle);
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        noFill();
        if (this.isHexagon) {
            hexagon(0, 0, this.size);
        }
        else {
            ellipse(0, 0, this.size * 2);
        }
        pop()
    }
}



class SimpleLine extends Layer {
    constructor(_size = RADIUS) {
        super(_size);
        this.numStep = randomSelectTwo() ? 8 : 10;
        this.stepLength = this.size / this.numStep;
        this.start = randomInt(this.numStep);
        this.stop = randomInt(this.start, this.numStep + 1);
        this.color.setAlpha(random(255));
    }

    render() {

        push()
        this.curAngle += this.angleOffset;
        rotate(this.curAngle);
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        for (let i = 0; i < this.side; i++) {
            line(this.start * this.stepLength, 0, this.stop * this.stepLength, 0);
            rotate(2 * PI / this.side);
        }
        pop();
    }
}


class DottedLines extends Layer {
    constructor(_size = RADIUS) {
        super(_size)
        this.numShapes = this.side;
        this.angle = 2 * PI / this.numShapes
        this.shapeSize = random(.5, 3);
        this.stepsOut = 8
        this.singleStep = this.size / this.stepsOut
        this.centerOffset = this.singleStep
        this.color.setAlpha(random(255));
    }

    render() {
        push()
        this.curAngle += this.angleOffset;
        rotate(this.curAngle);
        fill(this.color);
        stroke(this.color);
        strokeWeight(this.strokeWeight);
        for (let i = 0; i <= this.numShapes; i++) {
            for (let x = this.centerOffset; x < this.size; x += this.singleStep) {
                // rect(x, 0, this.shapeSize, this.shapeSize)
                ellipse(x, 0, this.shapeSize);
            }
            rotate(this.angle)
        }
        pop()
    }

}

class CenteredShape extends Layer {
    constructor(_size = RADIUS) {
        super(_size)
        this.randomShape = random(1)
        this.shapeSize = floor(random(this.stepsOut / 2, this.stepsOut)) * this.singleStep
        this.color.setAlpha(random(255));
        this.curAngle = 0;
        this.angleOffset = random(-.01, .01);
    }

    render() {
        fill(this.color)

        noStroke()
        push()
        this.curAngle += this.angleOffset;
        rotate(this.curAngle);
        if (this.randomShape < 0.1) {
            rect(0, 0, this.shapeSize * 2, this.shapeSize * 2)
        } else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
            ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2)
        } else if (this.randomShape >= 0.6) {
            rotate(PI / 2);
            hexagon(0, 0, this.shapeSize)
        }
        pop()
    }
}

class RingOfShapes extends Layer {
    constructor(_size = RADIUS) {
        super(_size)
        this.steps = floor(random(1, this.stepsOut))
        this.center = this.steps * this.singleStep
        this.randomShape = random(1)
        this.direction = randomSelectTwo() // used for triangle only
        this.fillColor = randomSelectTwo() ? this.color : color(0, 1)
        this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.color.setAlpha(random(255));

        if (this.steps < this.stepsOut / 2) {
            this.radius = floor(random(1, this.steps)) * this.singleStep
        } else if (this.steps > this.stepsOut / 2) {
            this.radius = floor(random(1, this.stepsOut - this.steps)) * this.singleStep
        } else {
            this.radius = floor(random(1, (this.stepsOut / 2) + 1)) * this.singleStep
        }
    }

    render() {
        stroke(this.color);
        fill(this.fillColor)
        strokeWeight(this.weight)
        push()
        this.curAngle += this.angleOffset;
        rotate(this.curAngle);
        for (let i = 0; i < this.numShapes; i++) {
            if (this.randomShape < 0.33) {
                ellipse(0, this.center, this.radius, this.radius)
            } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
                rect(0, this.center, this.radius, this.radius)
            } else if (this.randomShape >= 0.66) {
                myTriangle(this.center, this.radius, this.direction)
            }
            rotate(this.angle)
        }
        pop()
    }
}