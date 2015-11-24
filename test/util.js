var fp = require('../lib/fp');

exports.get = function(t) {
  var getName = fp.prop('name');
  t.deepEqual(getName({name: 'fei'}), 'fei');
  t.deepEqual(getName({noname: 'noname'}), undefined);
  t.done();
};
