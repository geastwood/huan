import {curry} from 'lodash';

export default curry((d, v) =>  (v == null || v !== v) ? d : v);