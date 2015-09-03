import _ from 'lodash';
import airbnb from 'eslint-config-airbnb/base';

const exchangeSolutionsOverrides = {
  'rules': {
    'comma-dangle': 0,
    'vars-on-top': 0
  }
};

export default _.merge({}, airbnb, exchangeSolutionsOverrides);
