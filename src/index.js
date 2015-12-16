import * as fp from './fp';
import groupBy from './groupBy';
import chunk from './chunk';
import defaultTo from './defaultTo';
import difference from './difference';
import filterObj from './filterObj';
import flatMap from './flatMap';
import mapObj from './mapObj';
import map from './map';
import omit from './omit';
import pair from './pair';
import partition from './partition';
import path from './patch';
import pick from './pick';
import pluck from './pluck';
import project from './project';
import reduceObj from './reduceObj';
import valueIf from './valueIf';
import values from './values';
import always from './always';
import anyPass from './anyPass';
import allPass from './allPass';
import curry1 from './core/curry1';
import curry2 from './core/curry2';
import curry3 from './core/curry3';
import uniqByKey from './uniqByKey';
import uniqBy from './uniqBy';
import flatten from './flatten';

import Maybe from './instance/Maybe';
import Identity from './instance/Identity';
import Const from './instance/Const';

var curry = curry2;

export default {
  ...fp,
  always,
  anyPass,
  allPass,
  chunk,
  curry,
  curry1,
  curry2,
  curry3,
  defaultTo,
  difference,
  filterObj,
  flatMap,
  groupBy,
  mapObj,
  map,
  omit,
  pair,
  partition,
  path,
  pick,
  pluck,
  project,
  reduceObj,
  valueIf,
  values,
  uniqByKey,
  uniqBy,
  flatten,
  Maybe,
  Identity,
  Const
};
