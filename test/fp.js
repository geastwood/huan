var fp = require('../lib')['default'];

var head = fp.head;
var tail = fp.tail;
var compose = fp.compose;
var splats = fp.splats;
var merge = fp.mergeObj;

exports.compose = t => {
  var add1 = v => v + 1,
    add2 = v => v + 2;
  t.equal(compose(add1, add2)(1), 4);
  t.equal(splats(compose)([add1, add2])(2), 5);
  t.done();
};

exports.prop = t => {
  t.done();
};

exports.head = t => {
  var eq = t.equal;
  eq(head([1, 2, 3]), 1);
  eq(head([2, 3]), 2);
  eq(head([3]), 3);
  eq(head([]), undefined);

  eq(head('abc'), 'a');
  eq(head('bc'), 'b');
  eq(head('c'), 'c');
  eq(head(''), undefined);
  t.done();
};
exports.tail = t => {
  var eq = t.equal;
  var deepEq = t.deepEqual;
  deepEq(tail([1, 2, 3]), [2, 3]);
  deepEq(tail([2, 3]), [3]);
  deepEq(tail([3]), []);
  deepEq(tail([]), []);

  eq(tail('abc'), 'bc');
  eq(tail('bc'), 'c');
  eq(tail('c'), '');
  eq(tail(''), '');
  t.done();
};

exports.assign = t => {
  var deepEq = t.deepEqual;
  deepEq(merge({}, {a: 'a value'}), {a: 'a value'});
  deepEq(merge({a: 'some other value'}, {a: 'a value'}), {a: 'a value'});
  deepEq(merge({a: 'some other value'}), {a: 'some other value'});
  deepEq(merge({a: 'some other value', b: 'b'}, {a: 'a'}), {a: 'a', b: 'b'});
  t.done();
};
