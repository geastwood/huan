import {curry} from 'lodash';
import {Maybe} from './instance/Maybe';

export var concat = curry((a, b) => a.concat(b));
export var id = v => v;
export var compose = (...fns) => v => fns.reduceRight((carry, fn) => fn(carry), v);
export var get = curry((prop, obj) => Maybe.of(obj[prop]));

export var of = x => x.of;
export var map = curry((f, u) => u.map(f));
export var reduce = curry((acc, init, xs) => xs.reduce(acc, init));
export var ap = curry((u, v) => u.ap(v));
export var extract = m => m.extract();

// xs -> any -> Boolean
export var contains = curry((xs, key) => xs.indexOf(key) !== -1);

export var ifNothing = curry((v, m) => {
  if (String(m) === 'Nothing') {
    return v;
  }
  return m.extract();
});

export var liftA2 = curry((f, x, y) => x.map(f).ap(y));
export var liftA3 = curry((f, x, y, z) => x.map(f).ap(y).ap(z));

export var makeType = (type, v) => new type(v);

