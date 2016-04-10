# TODO

1. ERROR, WARNING, IGNORE instead of 1, 0, 2
5. Change this file
3. Replace on all cases, e.g extension, ccc, adman


# eslint-config-airbnb

This package provides Phaistos Networks's .eslintrc as an extensible shared config.

*It's basically a clone of [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) same project with different and more rules and some other minor changes*

## Usage

We export three ESLint configurations for your usage.

### eslint-config-phaistos-networks

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-phaistos-networks eslint-plugin-import eslint-plugin-react eslint`
2. add `"extends": "phaistos-networks"` to your .eslintrc

### eslint-config-phaistos-networks/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-phaistos-networks eslint-plugin-import eslint`
2. add `"extends": "phaistos-networks/base"` to your .eslintrc

### eslint-config-phaistos-networks/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-phaistos-networks eslint`
2. add `"extends": "phaistos-networks/legacy"` to your .eslintrc
