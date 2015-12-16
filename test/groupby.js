var groupBy = require('../lib/groupBy');
var fp = require('../lib/fp');
var prop = fp.prop;

var id = prop('id');
var id1 = prop('id1');
var name = prop('name');

exports.groupBy = function(t) {

  t.deepEqual(groupBy(id, [
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'}
    ]),
    {
      '1': [
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'}
      ]
    }
  );

  // empty return empty
  t.deepEqual(groupBy(id, []), {});

  t.deepEqual(groupBy(id, [
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 2, name: 'fei'}
    ]),
    {
      '1': [
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'}
      ],
      2: [
        {id: 2, name: 'fei'}
      ]
    }
  );

  // group by name
  t.deepEqual(groupBy(name, [
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 1, name: 'fei'},
      {id: 2, name: 'fei'}
    ]),
    {
      'fei': [
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 2, name: 'fei'}
      ]
    }
  );

  t.done();
};

exports['groupBy - key fn return undefined'] = function(t) {
  var data1 = [
    {id: 1, name: 'fei'},
    {id: 1, name: 'fei'},
    {id: 1, name: 'fei'},
    {id: 2, name: 'fei'}
  ];
  t.deepEqual(groupBy(id1, data1),
    {
      '@@error': [
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 1, name: 'fei'},
        {id: 2, name: 'fei'}
      ]
    }
  );
  t.done();
};

exports['groupBy-again'] = function(t) {
  var data = [
      {name: 'Abby', score: 84},
      {name: 'Eddy', score: 58},
      {name: 'Fei', score: 68},
      {name: 'Jack', score: 69}
    ],
    languages = [
      {name: 'js'}, {name: 'php'}, {name: 'scala'}, {name: 'haskell'}
    ],
    getStore = function(student) {
      var score = student.score;
      return (score < 65 ? 'F' :
        score < 70 ? 'D' :
          score < 80 ? 'C' :
            score < 90 ? 'B' : 'A');
    };

  t.deepEqual(groupBy((function(student) {
      var score = student.score;
      return (score < 65 ? 'F' :
        score < 70 ? 'D' :
          score < 80 ? 'C' :
            score < 90 ? 'B' : 'A');
    }), data),
    {
      B: [{name: 'Abby', score: 84}],
      F: [{name: 'Eddy', score: 58}],
      D: [{name: 'Fei', score: 68}, {name: 'Jack', score: 69}]
    }
  );

  // test curry of group by
  t.deepEqual(groupBy(getStore)(data),
    {
      B: [{name: 'Abby', score: 84}],
      F: [{name: 'Eddy', score: 58}],
      D: [{name: 'Fei', score: 68}, {name: 'Jack', score: 69}]
    }
  );

  t.deepEqual(groupBy(function(lang) {
      if (lang.name === 'js' || lang.name === 'php') {
        return 'not-typed'
      }
      return 'typed'
    }, languages),
    {
      'not-typed': [{name: 'js'}, {name: 'php'}],
      typed: [{name: 'scala'}, {name: 'haskell'}]
    }
  );

  t.done();
};
