---
title: 'Project Setup'
description: 'How to set up a new Project Nebula codebase.'
---

# TL;DR

- Initialize Git
- Set up Prettier
- Initialize ESLint
- Use [commitlint](https://github.com/conventional-changelog/commitlint)
- Use [Commitizen](https://github.com/commitizen/cz-cli)

# Code Quality

The Project Nebula codebase uses a few tools to enforce code quality and commit
conventions.

## Prettier

Install [Prettier](https://prettier.io/docs/en/install.html).

Ensure there is a `.prettierrc.js` file at the root of the project with this
configuration:

```js
module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
```

```
npm i -D prettier
```

Easy way to set up Prettier to run on commit:

```
npx mrm lint-staged
```

Now update the lint-staged configuration in the project's `package.json`:

```json
{
  // ...
  "lint-staged": {
    "*.{tsx,ts,js}": [
      "eslint --cache --fix .",
      "prettier --write {pages,components,modules}/**/*.{tsx,ts,js}"
    ]
  }
}
```

## ESLint

Install the following as devDependencies:

- eslint
- eslint-config-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
- eslint-plugin-simple-import-sort

For the magic incantation:

```bash
npm i -D eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-simple-import-sort
```

## Commitlint

```
npm i -D @commitlint/config-conventional @commitlint/cli
```

Use this for the `commitlint.config.js` config:

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', ['sentence-case', 'start-case']],
  },
};
```

## Conventional Changelog

[Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog)
automatically generates changelogs based on the Conventional Commits spec.

We'll primarily use these for generating releases for packages, and for more
user-facing functionality, we'll write our own changelogs based off the
automatically generated ones.

```
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

## Commitizen

https://github.com/commitizen/cz-cli

In the project's `package.json`, the config look like this:

```json
{
  // ...
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog",
      "disableSubjectLowerCase": true,
      "maxHeaderWidth": 72,
      "maxLineWidth": 80,
      "defaultType": "chore"
    }
  }
}
```
