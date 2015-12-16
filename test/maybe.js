var Maybe = require('../lib/instance/Maybe');
var fp = require('../lib/fp');
var map = require('../lib/map');

var always = function(v) {
  return function() {
    return v;
  };
};

exports.maybe = function(t) {
  var v = Maybe.of(1);
  var v1 = Maybe.of(null);
  var shouldChange = 1;
  t.deepEqual(map(v => v + 1)(v), {value: 2});
  t.deepEqual(map(v => v + 1)(v1), {value: undefined});
  t.deepEqual(
    fp.compose(
      map(v => {
        shouldChange++; // this is not run when previous step returns null / undefined
        return v + 2;
      }),
      map(always((void 0))),
      map(v => v + 7))
      (v),
    {value: undefined}
  );
  t.equal(shouldChange, 1);

  t.done();
};
