# NoteDrop

NoteDrop is a simple mark-down app just like AppleNotes but built with Electron, React, and Typescript.

## Tech Stacks currently used:
Electron, React, Typescript, TailwindCSS

## General Project Overview

```
└── 📁NoteDrop
    └── 📁src
        └── 📁main
            └── index.ts
        └── 📁preload
            └── index.d.ts
            └── index.ts
        └── 📁renderer
            └── 📁src
                └── 📁assets
                    └── base.css
                    └── electron.svg
                    └── main.css
                    └── wavy-lines.svg
                └── 📁components
                    └── Versions.tsx
                └── App.tsx
                └── env.d.ts
                └── main.tsx
            └── index.html
    └── .editorconfig
    └── .eslintignore
    └── .eslintrc.cjs
    └── .gitignore
    └── .prettierignore
    └── .prettierrc.yaml
    └── electron-builder.yml
    └── electron.vite.config.ts
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.json
    └── tsconfig.node.json
    └── tsconfig.web.json
```

## Working Background
![Project Structure](./resources/NoteDrop_Structure.png)

## Project Setup

### Install

```bash
$ npm install
```

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
