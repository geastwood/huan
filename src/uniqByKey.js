import curry from 'lodash.curry';
import {prop} from './fp';

import uniq from './core/uniq';

export default curry((key, xs) => {
  return uniq(xs, prop(key));
});
