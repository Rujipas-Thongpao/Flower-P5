const layerConstructors = [
    {
        init: (_size) => new OutlineShape(_size),
        weight: 0.3
    },
    {
        init: (_size) => new Circles(_size),
        weight: 0.3
    },
    {
        init: (_size) => new SimpleLine(_size),
        weight: 0.3
    },
    {
        init: (_size) => new DottedLines(_size),
        weight: 0.3
    },
    {
        init: (_size) => new CenteredShape(_size),
        weight: 0.3
    },
    {
        init: (_size) => new RingOfShapes(_size),
        weight: 0.3
    },
]