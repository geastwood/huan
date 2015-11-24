var omit = require('../lib/omit');

exports.omit = function(t) {
  var testObj = {name: 'test', role: 'testObj', prop1: 'prop1', prop2: 'prop2'}
  t.deepEqual(omit(['role', 'prop1', 'prop2'], testObj), {name: 'test'});
  t.deepEqual(omit(['prop1', 'prop2'], testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(omit(['prop1', 'prop2'])(testObj), {name: 'test', role: 'testObj'});
  t.deepEqual(omit(['name', 'role', 'prop100'], testObj), {prop1: 'prop1', prop2: 'prop2'});
  t.deepEqual(omit([], testObj), testObj);
  t.done();
};