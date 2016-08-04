var huan = require('../lib')['default'];
var path = huan.path;

exports.path = t => {
  var obj = {
    a: {
      b: {
        c: 'c value'
      }
    }
  };
  t.deepEqual(path([], obj), obj);
  t.equal(path(['a', 'b', 'c', 'd'], obj), undefined);
  t.equal(path(['a', 'c', 'd'], obj), undefined);
  t.deepEqual(path(['a'], obj), {b: {c: 'c value'}});
  t.deepEqual(path(['a', 'b'], obj), {c: 'c value'});
  t.equal(path(['a', 'b', 'c'], obj), 'c value');
  t.equal(path(['a', 'b', 'c'])(obj), 'c value');
  t.done();
};
