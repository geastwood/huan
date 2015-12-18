import {isArray} from './fp';
import chunk from './chunk';
import toPair from './toPair';

export default v => isArray(v) ? chunk(2, v) : toPair(v);
