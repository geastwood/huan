import * as fp from './fp';
import groupBy from './groupBy';
import chunk from './chunk';
import defaultTo from './defaultTo';
import difference from './difference';
import filterObj from './filterObj';
import flatMap from './flatMap';
import mapObj from './mapObj';
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

export default {
  ...fp,
  groupBy,
  chunk,
  defaultTo,
  difference,
  filterObj,
  flatMap,
  mapObj,
  omit,
  pair,
  partition,
  path,
  pick,
  pluck,
  project,
  reduceObj,
  valueIf,
  values
};
