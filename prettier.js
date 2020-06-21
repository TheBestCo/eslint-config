module.exports = {
  extends: [
    './base',
    './rules/strict',
    './rules/react',
    './rules/prettier',
  ].map(require.resolve),
  rules: {}
};
