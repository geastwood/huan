var huan = require('../lib/huan');

exports.get = function(t) {
  var getName = huan.get('name');
  t.deepEqual(getName({name: 'fei'}), 'fei');
  t.deepEqual(getName({noname: 'noname'}), undefined);
  t.done();
};
