class Flower {
    constructor(_size, posX, posY) {
        this.size = _size;
        this.x = posX;
        this.y = posY;
        this.layers = []
        layerConstructors.forEach(lCon => {
            let ran = random(1);
            if (ran > lCon.weight) {
                this.layers.push(lCon.init(this.size));
            }
        })
    }
    render() {
        push();
        translate(this.x, this.y);
        this.layers.forEach(layer => {
            layer.render();
        })
        pop();

    }
}