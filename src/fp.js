import {curry} from 'lodash';

export var of = x => x.of;
export var map = curry((f, u) => u.map(f));
export var ap = curry((u, v) => u.ap(v));
export var liftA2 = curry((f, x, y) => x.map(f).ap(y));
export var liftA3 = curry((f, x, y, z) => x.map(f).ap(y).ap(z));

export var makeType = (type, v) => new type(v);
