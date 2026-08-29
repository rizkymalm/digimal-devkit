# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-08-29

### Added

- Added React Three Fiber (R3F) support through the `react.three` option.
- Added R3F-specific compatibility rules for `react/no-unknown-property`.
- Added support for common R3F and Three.js properties, including:
  - Core and primitives: `object`, `attach`, `dispose`, `args`, `visible`, `userData`
  - Transformations: `position`, `rotation`, `scale`, `quaternion`, `up`, `matrixAutoUpdate`
  - Lighting: `intensity`, `color`, `castShadow`, `receiveShadow`
  - Materials: `transparent`, `opacity`, `roughness`, `metalness`, `wireframe`, `side`, `depthWrite`, `depthTest`
  - Visual effects: `map`, `envMap`, `envMapIntensity`, `normalMap`, `roughnessMap`, `metalnessMap`, `emissive`, `emissiveIntensity`
  - Cameras: `fov`, `near`, `left`, `right`, `top`, `bottom`, `far`, `aspect`
  - Geometry and buffer attributes: `geometry`, `material`, `count`, `array`, `itemSize`, `usage`

### Changed

- Extended the `react` configuration option to support nested options.
- The `react` option now accepts either a boolean or a configuration object.

```ts
defineConfig({
  react: true,
});
```

or

```ts
defineConfig({
  react: {
    three: true,
  },
});
```
