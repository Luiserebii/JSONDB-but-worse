import Util = require('../util/util');

//Extend this, for the use of the ObjectDB
class JSONData {

  toJSON(): object { return Util.instanceToObj(this); }

}

export = JSONData;
