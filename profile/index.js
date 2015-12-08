import * as uniq from './uniq';
import {repeat} from './util';
import {compose, prop, concat, tap, id} from '../lib/fp';
import map from '../lib/map';

var logName = tap(console.log, compose(concat('profiling '), prop('name')));
var timeStart = tap(console.time, prop('description'));
var timeEnd = tap(console.timeEnd, prop('description'));
var profile = (target) => {
  logName(target);
  target.cases.forEach(test => {
    timeStart(test);
    repeat(target.repeat, test.f);
    timeEnd(test);
  });
};

profile(uniq);
