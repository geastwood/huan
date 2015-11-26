import {curry} from 'lodash';

export default curry((d, v) => {
  return (v == null || v !== v) ? d : v;
});