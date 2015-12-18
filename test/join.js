var join = require('../lib/join');

exports.join = t => {
  t.equal(join('-')(['a', 'b', 'c']), 'a-b-c');
  t.equal(join('')(['a', 'b', 'c']), 'abc');
  t.equal(join('')([]), '');
  t.done();
};
