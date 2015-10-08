/* eslint no-console: 0, no-unused-vars: 0 */

import l from 'lodash';

let k;
for (k = 0; k < 10; k++) {
  console.log(k);
}

try {
  // Some logic
} catch (e) {
  // Error Handling
}

// warning 3:8 id-length - Identifier name 'l' is too short. (< 3)
// warning 5:5 id-length - Identifier name 'k' is too short. (< 3)
// warning 12:10 id-length - Identifier name 'e' is too short. (< 3)
