var util = require('../lib/util');

exports.get = function(t) {
  var getName = util.get('name');
  t.deepEqual(getName({name: 'fei'}), 'fei');
  t.deepEqual(getName({noname: 'noname'}), undefined);
  t.done();
};
