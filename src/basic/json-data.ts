const Util = require('../util/util')

//Extend this, for the use of the ObjectDB
class JSONData {

  toJSON(){ return Util.instanceToObj(this); }

}

module.exports = JSONData;
