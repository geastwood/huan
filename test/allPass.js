var allPass = require('../lib/allPass');
var fp = require('../lib/fp');
var curry = require('lodash.curry');
var always = require('../lib/always');

exports.allPass = t => {
  var obj = {
    a: 'a_1',
    b: 'b_1'
  };
  var equal = curry((a, b) => a === b);
  var matchShape = [fp.compose(equal('a_1'), fp.prop('a')), fp.compose(equal('b_1'), fp.prop('b'))];

  t.equal(allPass(matchShape)(obj), true);
  t.equal(allPass(matchShape.concat(always(false)))(obj), false);

  // without condition returns true
  t.equal(allPass([])(obj), true);

  t.done();
};
