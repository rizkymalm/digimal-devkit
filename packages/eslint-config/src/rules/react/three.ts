export const reactThreeRules = {
  "react/no-unknown-property": [
    "error",
    {
      ignore: [
        //core and primitives
        "object",
        "attach",
        "dispose",
        "args",
        "visible",
        "userData",
        //transformasi (position, scale, rotation )
        "position",
        "rotation",
        "scale",
        "quaternion",
        "up",
        "matrixAutoUpdate",
        //pencahayaan
        "intensity",
        "color",
        "castShadow",
        "receiveShadow",
        //material
        "transparent",
        "opacity",
        "roughness",
        "metalness",
        "wireframe",
        "side",
        "depthWrite",
        "depthTest",
        //visual effect & Glow
        "map",
        "envMap",
        "envMapIntensity",
        "normalMap",
        "roughnessMap",
        "metalnessMap",
        "emissive",
        "emissiveIntensity",
        //camera
        "fov",
        "near",
        "left",
        "right",
        "top",
        "bottom",
        "far",
        "aspect",
        //geometry and buffer attributes
        "geometry",
        "material",
        "count",
        "array",
        "itemSize",
        "usage",
      ],
    },
  ],
} as const;
