import {curry} from 'lodash';

export var concat = curry((a, b) => a.concat(b));
export var id = v => v;
export var compose = (...fns) => v => fns.reduceRight((carry, fn) => fn(carry), v);
export var get = curry((prop, obj) => obj[prop]);

export var of = x => x.of;
export var map = curry((f, u) => u.map(f));
export var ap = curry((u, v) => u.ap(v));

export var ifNothing = curry((v, m) => {
  if (String(m) === 'Nothing') {
    return v;
  }
  return m.value;
});

export var liftA2 = curry((f, x, y) => x.map(f).ap(y));
export var liftA3 = curry((f, x, y, z) => x.map(f).ap(y).ap(z));

export var makeType = (type, v) => new type(v);

