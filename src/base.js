import _ from 'lodash';
import airbnb from 'eslint-config-airbnb/base';
import core from './core';

export default _.merge({}, airbnb, core);
