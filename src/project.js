import {curry} from 'lodash';
import {compose} from './fp';
import patch from './patch';
import pick from './pick';

/**
 * [k] -> [{k: v}] -> [{k: v}]
 */
export default curry((props, xs) => {
  return xs.map(compose(patch(undefined, props), pick(props)));
});
