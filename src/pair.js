import {isArray} from './fp';
import chunk from './chunk';
import toPair from './toPair';

/**
 * @level 1
 * @param v
 */
export default v => isArray(v) ? chunk(2, v) : toPair(v);
