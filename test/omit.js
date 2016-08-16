var omit = require('../lib')['default'].omit;

exports.omit = function(t) {
  var testObj = {name: 'test', role: 'testObj', prop1: 'prop1', prop2: 'prop2'};
  var de = t.deepEqual;
  de(omit(['role', 'prop1', 'prop2'], testObj), {name: 'test'});
  de(omit(['prop1', 'prop2'], testObj), {name: 'test', role: 'testObj'});
  de(omit(['prop1', 'prop2'])(testObj), {name: 'test', role: 'testObj'});
  de(omit(['name', 'role', 'prop100'], testObj), {prop1: 'prop1', prop2: 'prop2'});
  de(omit(['foo'], testObj), testObj);
  de(omit([], testObj), testObj);
  t.done();
};
