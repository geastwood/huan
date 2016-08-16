import curry from './core/curry2';
import {contains} from './fp';
import filterObj from './filterObj';

/**
 * [k] -> {k: v} -> {k: v}
 * @level 1
 */
export default curry((props, obj) => {
  var pred = contains(props);
  return filterObj(({key}) => !pred(key), obj)
});
