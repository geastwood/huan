import {mergeObj} from './fp';

/**
 * [{k:v}] -> [{k:v}]
 * @param o1
 * @param os
 *
 * @level 1
 */
export default (o1, ...os) => os.reduce(mergeObj, o1);

