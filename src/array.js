import {curry} from 'lodash';
import {ifNothing, map, compose, extract} from './huan';
import {Maybe} from './instance/Maybe';

// todo, move
var contains = curry((xs, key) => xs.indexOf(key) !== -1);

export var groupBy = curry((f, xs) => {
  var ls = [], hasFn = contains(ls);
  return xs.reduce((rst, x) => {
    var key = compose(ifNothing('@@error'))(f.ap(x));
    if (hasFn(key)) {
      rst[key].push(x);
    } else {
      ls.push(key);
      rst[key] = [x];
    }
    return rst;
  }, {});
});

