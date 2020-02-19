const METAL = 0;
const RUBBER = 1;
const WOOD = 2;
const STATIC = 3;

export const levels = [
  // 0
  {
    targets: [],
    generators: [],
    elements: []
  },
  // 1
  {
    targets: [
      {
        position: { x: 1.5, y: 0.5, z: 0 },
        rotation: { x: 0, y: Math.PI / 2, z: 0 }
      }
    ],
    generators: [
      {
        position: { x: 1, y: 2.5, z: 0 },
        linearVelocity: { x: -2, y: 3.5, z: 0 }
      }
      //{ position: { x: -1, y: 1, z: 0 } }
    ],
    elements: [
      {
        type: WOOD,
        position: { x: -0.75, y: 1.5, z: 0 },
        rotation: { x: 0, y: 0, z: 6 }
      },
      {
        type: METAL,
        position: { x: -0.2, y: 0.8, z: 0 },
        rotation: { x: 0, y: 0, z: -0.3 }
      },
      {
        type: RUBBER,
        position: { x: 0.5, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      },
      {
        type: STATIC,
        position: { x: 0.6, y: 1.8, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      }
    ]
  },
  // 2
  {
    targets: [
      {
        position: { x: 1.5, y: 0.8, z: 0 },
        rotation: { x: 0, y: Math.PI / 2, z: 0 }
      }
    ],
    generators: [
      {
        position: { x: 1, y: 2.5, z: 0 },
        linearVelocity: { x: -2, y: 3.5, z: 0 }
      }
      //{ position: { x: -1, y: 1, z: 0 } }
    ],
    elements: [
      {
        type: WOOD,
        position: { x: -0.75, y: 1.5, z: 0 },
        rotation: { x: 0, y: 0, z: 6 }
      },
      {
        type: METAL,
        position: { x: -0.2, y: 0.8, z: 0 },
        rotation: { x: 0, y: 0, z: -0.3 }
      },
      {
        type: RUBBER,
        position: { x: 0.5, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      },
      {
        type: RUBBER,
        position: { x: 1, y: 1, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      },
      {
        type: STATIC,
        position: { x: 0.6, y: 0.8, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      }
    ]
  },
  // 3
  {
    targets: [
      {
        position: { x: 2, y: 1.8, z: 0 },
        rotation: { x: 0, y: Math.PI / 2, z: 0 }
      }
    ],
    generators: [
      {
        position: { x: -1, y: 1.5, z: 0 },
        linearVelocity: { x: 2, y: 3.5, z: 0 }
      }
      //{ position: { x: -1, y: 1, z: 0 } }
    ],
    elements: [
      {
        type: RUBBER,
        position: { x: 1.5, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      },
      {
        type: RUBBER,
        position: { x: 1, y: 1, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      },
      {
        type: STATIC,
        position: { x: 0.6, y: 0.8, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      }
    ]
  },
  /*
  // 4
  {
    targets: [
      {
        position: { x: 2, y: 1.8, z: 0 },
        rotation: { x: 0, y: Math.PI / 2, z: 0 }
      }
    ],
    generators: [
      {
        position: { x: -2, y: 2, z: 0 },
        linearVelocity: { x: 0, y: 10, z: 0 }
      },
      {
        position: { x: -1, y: 2, z: 0 },
        linearVelocity: { x: 2, y: 0, z: 0 }
      },
      {
        position: { x: 0, y: 2, z: 0 },
        linearVelocity: { x: -2, y: 0, z: 0 }
      }
    ],
    elements: [
      {
        type: RUBBER,
        position: { x: 1.5, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      },
      {
        type: RUBBER,
        position: { x: 1, y: 1, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      },
      {
        type: STATIC,
        position: { x: 0.6, y: 0.8, z: 0 },
        rotation: { x: 0, y: 0, z: 0.1 }
      }
    ]
  }*/
];
