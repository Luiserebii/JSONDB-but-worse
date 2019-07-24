import Util = require('../util/util');

//Extend this, for the use of the ObjectDB
class JSONData {

  constructor(x:object={}) {}

  toJSON(): object { return Util.instanceToObj(this); }

}

export = JSONData;
