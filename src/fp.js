import curry from 'lodash.curry';

import isPlainObject  from 'lodash.isplainobject';

export var isObject = isPlainObject;
export var isArray = v => Object.prototype.toString.call(v) === '[object Array]'
/**
 * [a] -> [a] -> [a]
 */
export var concat = curry((a, b) => a.concat(b));

/**
 * a -> a
 */
export var id = v => v;

export var compose = (...fns) => v => fns.reduceRight((carry, fn) => fn(carry), v);
export var mcompose = (...fns) => v => {
  return fns.reduceRight((carry, fn) => {
    return compose(extract, fn)(carry);
  }, v)
};

export var push = curry((ls, v) => {
  ls.push(v);
  return v;
});

export var tap = curry((f, g, v)  => {
  f(g(v));
  return v;
});

export var condition = curry((predicate, trueFn, falseFn) => v => predicate(v) ? trueFn(v) : falseFn(v));

export var complement = fn => (...args) => !fn.apply(null, args);

export var prop = curry((prop, obj) => obj[prop]);
export var hasProp = curry((propName, obj) => (typeof prop(propName, obj) !== 'undefined'));
export var propEq = curry((propName, v, obj) => prop(propName, obj) === v);

export var of = x => x.of;
export var map = curry((f, u) => u.map(f));
export var reduce = curry((acc, init, xs) => xs.reduce(acc, init));
export var filter = curry((f, u) => u.filter(f));
export var ap = curry((u, v) => u.ap(v));
export var extract = m => m.extract();
export var chain = curry((f, m) => m.chain(f));

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

export var falcy = v => v == null || v !== v;
