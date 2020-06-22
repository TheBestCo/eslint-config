module.exports = {
  rules: {
    // http://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": 0,

    // enforce operators to be placed before or after line breaks
    "operator-linebreak": ["error", "after"],

    // require or disallow space before function opening parenthesis
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": ["error", "inside"],

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    "react/jsx-max-props-per-line": 0,

    "react/jsx-closing-bracket-location": [
      1,
      { selfClosing: "line-aligned", nonEmpty: "after-props" },
    ]
  }
};
