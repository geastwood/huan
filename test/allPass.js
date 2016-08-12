var huan = require('../lib/')['default'];
var allPass = huan.allPass;

var isEven = v => v % 2 === 0;
var lessThan10 = v => v < 10;
var eq42 = v => v === 42;
var propEq = huan.propEq;
var propEqA = propEq('a', 'a_1');
var propEqB = propEq('b', 'b_1');

exports.allPass = t => {
  var obj = {
      a: 'a_1',
      b: 'b_1'
    },
    obj1 = {
      a: 'a_1',
      b: 'b_1',
      c: 'c_1'
    };
  var matchShape = [propEqA, propEqB];
  var eq = t.equal;

  eq(allPass(matchShape)(obj), true);
  eq(allPass(matchShape.concat(huan.hasProp('c')))(obj1), true);
  eq(allPass(matchShape.concat(huan.hasProp('c')).concat(obj => {
    return obj.b === 'b_1' && obj.c === 'c_1';
  }))(obj1), true);

  eq(allPass([isEven, lessThan10, eq42])(42), false);
  eq(allPass([isEven, lessThan10, huan.complement(eq42)])(8), true);

  eq(allPass([])(), true);

  t.done();
};
