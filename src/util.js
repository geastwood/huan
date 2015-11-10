import {curry} from 'lodash';

export var concat = curry((a, b) => a.concat(b));
export var id = v => v;
export var compose = (...fns) => v => fns.reduceRight((carry, fn) => fn(carry), v);
export var get = curry((prop, obj) => obj[prop]);
export var trucy = v => !!v;

export var makeType = (type, v) => new type(v);