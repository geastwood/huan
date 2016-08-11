import * as fp from './fp';
import assoc from './assoc';
import groupBy from './groupBy';
import chunk from './chunk';
import defaultTo from './defaultTo';
import filterObj from './filterObj';
import flatMap from './flatMap';
import mapObj from './mapObj';
import map from './map';
import omit from './omit';
import pair from './pair';
import toPair from './toPair';
import partition from './partition';
import path from './path';
import pick from './pick';
import pluck from './pluck';
import patch from './patch';
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
import join from './join';
import assign from './assign';
import repeat from './repeat';

var curry = curry2;

export default {
  ...fp,
  assoc,
  assign,
  always,
  anyPass,
  allPass,
  chunk,
  curry,
  curry1,
  curry2,
  curry3,
  defaultTo,
  filterObj,
  flatMap,
  groupBy,
  join,
  mapObj,
  map,
  omit,
  pair,
  toPair,
  partition,
  path,
  pick,
  pluck,
  project,
  patch,
  reduceObj,
  valueIf,
  values,
  uniqByKey,
  uniqBy,
  flatten,
  repeat
};
