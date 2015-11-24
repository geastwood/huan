var obj = require('../../lib/object');

exports.omit = function(t) {
  var testObj = {name: 'test', role: 'testObj', prop1: 'prop1', prop2: 'prop2'}
  t.deepEqual(obj.omit(['role', 'prop1', 'prop2'], testObj), {name: 'test'});
  t.deepEqual(obj.omit(['prop1', 'prop2'], testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(obj.omit(['prop1', 'prop2'])(testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(obj.omit(['name', 'role', 'prop100'], testObj), {prop1: 'prop1', prop2: 'prop2'});
  t.deepEqual(obj.omit([], testObj), testObj);
  t.done();
};