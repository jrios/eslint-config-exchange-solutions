module.exports = {
  extends: [
    'eslint-config-airbnb/legacy',
    'eslint-config-exchange-solutions/core'
  ].map(require.resolve)
};
