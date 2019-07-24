"use strict";
var Util = require("../util/util");
//Extend this, for the use of the ObjectDB
var JSONData = /** @class */ (function () {
    function JSONData() {
    }
    JSONData.prototype.toJSON = function () { return Util.instanceToObj(this); };
    return JSONData;
}());
module.exports = JSONData;
