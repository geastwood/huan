import {mergeObj} from './fp';

// [{k:v}] -> [{k:v}]
export default (o1, ...os) => os.reduce(mergeObj, o1);

