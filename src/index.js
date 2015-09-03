import _ from 'lodash';
import airbnb from 'eslint-config-airbnb';
import baseOverrides from './base';

const reactOverrides = {
};

export default _.merge({}, airbnb, baseOverrides, reactOverrides);
