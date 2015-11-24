import {curry} from 'lodash';
import {property} from './fp';

/**
 * k -> [k: v] -> [v]
 */
export default curry((prop, xs) => {
  return xs.map(property(prop));
});
