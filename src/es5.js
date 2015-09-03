import _ from 'lodash';
import airbnb from 'eslint-config-airbnb/base';
import baseOverrides from './base';

const es5Overrides = {
  'rules': {
    'no-var': 0
  }
};

export default _.merge({}, airbnb, baseOverrides, es5Overrides);
