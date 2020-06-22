# BestPrice's eslint-config

This package provides BestPrice's .eslintrc as an extensible shared config.

_It's basically a clone of [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) same project with different and more rules and some other minor changes_

### How to update

1. `git commit -am …`
2. `npm version patch`
3. `git push`
4. `npm publish`

## Usage

We export four ESLint configurations for your usage.

### @thebestco/eslint-config

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev @thebestco/eslint-config eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks@next babel-eslint eslint`
2. add `"extends": "@thebestco"` to your .eslintrc

### @thebestco/eslint-config/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev @thebestco/eslint-config eslint-plugin-import babel-eslint eslint-plugin-react-hooks@next eslint`
2. add `"extends": "@thebestco/eslint-config/base"` to your .eslintrc

### @thebestco/eslint-config/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev @thebestco/eslint-config eslint`
2. add `"extends": "@thebestco/eslint-config/legacy"` to your .eslintrc

### @thebestco/eslint-config/prettier

Prettier is a high opinionated powerful automatic formatter. Eslinter is a code quality tool.
They can both live together but there are some compromises we have to do. We should disable
all the es-rules that are effecting the code formating and interfere with the prettier.

The prettier setup contains the default export extended with the formating rules that interfere with the prettier.
It requires `eslint` and `eslint-plugin-react`, as it is in the default configuration.

1. `npm install --save-dev @thebestco/eslint-config eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks@next babel-eslint eslint`
2. add `"extends": "@thebestco/eslint-config/prettier"` to your .eslintrc

### If you want to have eslint installed globally, i.e running eslint in terminal (CLI)

```bash
npm install -g eslint
npm install -g babel-eslint
npm install -g eslint-plugin-react
npm install -g eslint-plugin-import
npm install -g eslint-plugin-jsx-a11y
npm install -g eslint-plugin-react-hooks@next
npm install -g @thebestco/eslint-config
```

### Additional notes

- Remove the args from yours sublimeLinter config so that the local `.eslintrc` as honored
- Make sure you add any additional rules and constants to .eslintrc that are specific to the project
- Make sure an `.eslintignore` is in place so that you target your eslint where needed
- Run `eslint . --fix` when you have your eslint in place to fix those easy to fix errors
