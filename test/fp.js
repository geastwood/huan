var fp = require('../lib/fp');
var compose = fp.compose;
var splats = fp.splats;

exports.compose = t => {
  var add1 = v => v + 1,
    add2 = v => v + 2;
  t.equal(compose(add1, add2)(1), 4);
  t.equal(splats(compose)([add1, add2])(2), 5);
  t.done();
};