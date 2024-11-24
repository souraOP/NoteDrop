# NoteDrop

NoteDrop is a simple mark-down app just like AppleNotes but built with Electron, React, and Typescript.

## Tech Stacks currently used:
Electron, React, Typescript, TailwindCSS

## General Project Overview

```bash
└── 📁md-notes
    └── 📁.vscode
        └── extensions.json
        └── launch.json
        └── settings.json
    └── 📁build
        └── entitlements.mac.plist
        └── icon.icns
        └── icon.ico
        └── icon.png
    └── 📁resources
        └── icon.png
        └── NoteDrop_Structure.png
    └── 📁src
        └── 📁main
            └── index.ts
        └── 📁preload
            └── index.d.ts
            └── index.ts
        └── 📁renderer
            └── 📁src
                └── 📁assets
                    └── index.css
                └── 📁components
                └── App.tsx
                └── env.d.ts
                └── main.tsx
            └── index.html
    └── .DS_Store
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
