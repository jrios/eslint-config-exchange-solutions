module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-exchange-solutions/base'
  ].map(require.resolve)
};
