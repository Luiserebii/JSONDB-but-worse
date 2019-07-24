const util = require('util');

class Util {

  static instanceToObjSimple(ins) {
    return Object.assign({}, ins);
  }

  static objToString(obj) {
    return util.inspect(obj);
  }

  static instanceToStringSimple(ins) {
    return Util.objToString(Util.instanceToObjSimple(ins));
  }

  //Recursive version of instanceToObjSimple; basically, if there are 
  static instanceToObj(ins) {
    let obj = {};
    const keys = Object.keys(ins);

    for(let i = 0; i < keys.length; i++){
      let k = keys[i];
      let v = ins[k];
      if(typeof v === 'object' && v) {
        obj[k] = Util.instanceToObj(v);
      } else {
        obj[k] = v;
      }
    }
    return obj;

  }

  static instanceToString(ins) {
    return Util.objToString(Util.instanceToObj(ins));
  }

}

module.exports = Util;
