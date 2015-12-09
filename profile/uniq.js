import uniqByKey from '../lib/uniqByKey';
import uniqBy from '../lib/uniqBy';
import {data1 as data} from  './data';
import ramda from 'ramda';

export var name = 'unique';
export var repeat = 10000;

export var f = () => {
  (uniqBy('id', data));
};
export var cases = [
  {
    description: 'uniq from "huan"',
    f() {
      (uniqByKey('id', data));
    }
  },
  {
    description: 'plain uniq',
    f() {
      var ls = [], getKey = v => v.id;
      data.filter(item => {
        var key;
        if (ls.indexOf((key = getKey(item))) === -1) {
          ls.push(key);
          return true;
        }
        return false;
      });
    }
  },
  {
    description: 'huan uniq',
    f() {
      uniqBy(v => v.id, data);
    }
  },
  {
    description: 'ramda uniq',
    f() {
      ramda.uniqBy(v => v.id, data);
    }
  }
];


