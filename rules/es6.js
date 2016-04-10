module.exports = {
  'env': {
    'es6': true
  },

  'plugins': [
    'import',
  ],

  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'generators': false,
      'objectLiteralDuplicateProperties': false
    }
  },
  'rules': {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [2, 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': [1, 'as-needed'],
    // require space before/after arrow function's arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    'arrow-spacing': [1, { 'before': true, 'after': true }],
    // require trailing commas in multiline object literals
    'comma-dangle': [2, 'always-multiline'],
    // verify super() callings in constructors
    'constructor-super': 1,
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': [1, {"before": false, "after": true}],
    // disallow modifying variables of class declarations
    'no-class-assign': 1,
    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [1, {
      'allowParens': true,
    }],
    // disallow modifying variables that are declared using const
    'no-const-assign': 1,
    // disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 1,
    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 1,
    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 1,
    // disallow specific globals
    'no-restricted-globals': 0,
    // disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 0,
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 1,
    // require let or const instead of var
    'no-var': 1,
    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 1,
    // require method and property shorthand syntax for object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
    'object-shorthand': [1, 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 1,
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 1,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 1,
    // suggest using Reflect methods where applicable
    'prefer-reflect': 1,
    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 1,
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 1,
    // disallow generator functions that do not have yield
    'require-yield': 1,
    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': 0,
    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': [1, 'never'],
    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': [1, 'after']
  }
};
