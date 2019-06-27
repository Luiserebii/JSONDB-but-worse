const Util = require('../util/util');

class Stringable {

  toStringRaw(){
    return Util.instanceToString(this);
  }

}

module.exports = Stringable;
