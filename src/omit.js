import curry from 'lodash.curry';
import {contains} from './fp';
import filterObj from './filterObj';

/**
 * [k] -> {k: v} -> {k: v}
 */
export default curry((props, obj) => filterObj(item => !contains(props, item.key), obj));
