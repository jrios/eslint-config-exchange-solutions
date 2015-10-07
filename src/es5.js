import _ from 'lodash';
import airbnb from 'eslint-config-airbnb/legacy';
import core from './core';

const overrides = {
  'rules': {
    'no-var': 0
  }
};

export default _.merge({}, airbnb, core, overrides);
