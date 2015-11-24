import {curry} from 'lodash';
import {contains} from './fp';
import filterObj from './filterObj';

/**
 * [k] -> {k: v} -> {k: v}
 */
export default curry((props, obj) => {
  return filterObj(item => contains(props, item.key), obj);
});
