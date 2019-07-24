"use strict";
var util = require("util");
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.instanceToObjSimple = function (ins) {
        return Object.assign({}, ins);
    };
    Util.objToString = function (obj) {
        return util.inspect(obj);
    };
    Util.instanceToStringSimple = function (ins) {
        return Util.objToString(Util.instanceToObjSimple(ins));
    };
    //Recursive version of instanceToObjSimple; basically, if there are 
    Util.instanceToObj = function (ins) {
        var obj = {};
        var keys = Object.keys(ins);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var v = ins[k];
            if (typeof v === 'object' && v) {
                obj[k] = Util.instanceToObj(v);
            }
            else {
                obj[k] = v;
            }
        }
        return obj;
    };
    Util.instanceToString = function (ins) {
        return Util.objToString(Util.instanceToObj(ins));
    };
    return Util;
}());
module.exports = Util;
