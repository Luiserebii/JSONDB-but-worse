import JSONDataI = require('./json-data-i');
import Util = require('../util/util');

//Extend this, for the use of the ObjectDB
class JSONData implements JSONDataI {

  toJSON(): object { return Util.instanceToObj(this); }

}

export = JSONData;
