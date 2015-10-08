module.exports = {
  rules: {
    'comma-dangle': [2, 'never'],
    'id-length': [1, {
      min: 3,
      properties: 'never',
      exceptions: ['_', '$', 'x', 'y', 'i', 'j']
    }],
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }],
    'no-use-before-define': 2,
    'vars-on-top': 0
  }
};
