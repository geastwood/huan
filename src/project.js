import curry from 'lodash.curry';
import {compose} from './fp';
import patch from './patch';
import pick from './pick';

/**
 * [k] -> [{k: v}] -> [{k: v}]
 */
export default curry((props, xs) => xs.map(compose(patch(undefined, props), pick(props))));
