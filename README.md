# Directory tree plugin

Add directory tree to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-directory-tree --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./src/index.js) -->
<!-- The below code snippet is automatically added from ./src/index.js -->
```js
const fs = require('fs');
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    DIRTREE: require('./dirtree'),
  }
}

// 注入当前工作目录的文件树到当前工作目录的README中
const markdownPath = path.resolve('README.md');
markdownMagic(markdownPath, config);
```
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./src /index.js-->
<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./&depth=2) -->
```
markdown-magic-directory-tree/
├─┬ .vscode/
│ └── launch.json
├─┬ bin/
│ └── mkdown.js
├─┬ src/
│ ├── dirtree/
│ └── index.js
├─┬ tpl/
│ └── CHANGELOG.md
├── .npmrc
├── CHANGELOG.md
├── package-lock.json
├── package.json
├── README.md
└── yarn.lock
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Options

* **dir** - `process.cwd()` by default
* **ignore** - `['.git', '.gitkeep', '.gitignore', 'node_modules']` by default
* **depth** - `Infinity` by default (how deep in the tree to traverse)
* **onlyDirs** - `false` by default (how mnuch t)
