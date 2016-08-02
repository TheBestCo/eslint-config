module.exports = {
  extends: [
    './legacy',
    './rules/es6',
    './rules/import',
  ].map(require.resolve),
  rules: {}
};
