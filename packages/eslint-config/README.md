# @digimal/eslint-config

A modern, opinionated ESLint Flat Config for React + TypeScript projects.

Built on top of **ESLint v9 Flat Config**, with sensible defaults for React, TypeScript, accessibility, Tailwind CSS, import sorting, and code quality.

> ⚡ Designed for modern frontend development using React, TypeScript, and Vite.

---

## Features

- ✅ ESLint v9 Flat Config
- ✅ React
- ✅ TypeScript
- ✅ Type-aware linting
- ✅ Accessibility (jsx-a11y)
- ✅ Tailwind CSS
- ✅ Import sorting
- ✅ Unused imports detection
- ✅ React Refresh support
- ✅ Highly configurable

---

## Installation

Install ESLint and the Digimal config.

```bash
npm install -D \
eslint \
@eslint/js \
@digimal/eslint-config
```

If you're using React + TypeScript, you should also have:

```bash
npm install -D typescript
```

---

## Usage

Create an `eslint.config.js`.

```js
import { defineConfig } from "@digimal/eslint-config";

export default defineConfig();
```

That's it.

---

## Configuration

You can enable or disable individual presets.

```js
import { defineConfig } from "@digimal/eslint-config";

export default defineConfig({
  react: true,
  tailwind: true,
  typeChecked: true,
  accessibility: true,
});
```

### Available options

| Option        | Default | Description                        |
| ------------- | ------- | ---------------------------------- |
| react         | `true`  | Enable React rules                 |
| tailwind      | `true`  | Enable Tailwind CSS rules          |
| typeChecked   | `true`  | Enable type-aware TypeScript rules |
| accessibility | `true`  | Enable jsx-a11y rules              |

Example:

```js
export default defineConfig({
  tailwind: false,
});
```

---

## Included Plugins

This package includes configuration for:

- @eslint/js
- typescript-eslint
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- eslint-plugin-jsx-a11y
- eslint-plugin-import
- eslint-plugin-simple-import-sort
- eslint-plugin-unused-imports
- eslint-plugin-tailwindcss

---

## Type-Aware Linting

Type-aware rules require TypeScript project information.

Enabled by default.

```js
export default defineConfig({
  typeChecked: true,
});
```

Disable it if you don't need typed linting.

```js
export default defineConfig({
  typeChecked: false,
});
```

---

## Examples

### React only

```js
export default defineConfig({
  react: true,
  typeChecked: false,
});
```

### React + Tailwind

```js
export default defineConfig();
```

### Disable accessibility

```js
export default defineConfig({
  accessibility: false,
});
```

---

## Philosophy

This project aims to provide:

- sensible defaults
- minimal configuration
- modern tooling
- reusable configuration
- consistent code style

The goal is to help developers spend less time configuring ESLint and more time building products.

---

## Roadmap

### v0.2

- Next.js preset
- Storybook preset
- Vitest preset
- Node.js preset

### v0.3

- Prettier config
- Shared TypeScript config

### v1.0

- Stable API
- Complete documentation
- Production ready

---

## License

MIT

---

Made with ❤️ by Digimal.

![npm](https://img.shields.io/npm/v/@digimal/eslint-config)
![license](https://img.shields.io/npm/l/@digimal/eslint-config)
![downloads](https://img.shields.io/npm/dm/@digimal/eslint-config)
![eslint](https://img.shields.io/badge/ESLint-v9-blue)
![typescript](https://img.shields.io/badge/TypeScript-supported-blue)
