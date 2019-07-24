"use strict";
/**
 * ObjectDB is an extensible class meant to build upon BasicDB.
 *
 * The idea is, allow for saving objects that extend the Data class
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicDB = require('./basic-db');
var ObjectDB = /** @class */ (function (_super) {
    __extends(ObjectDB, _super);
    function ObjectDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     */
    ObjectDB.prototype.saveData = function (data, filepath, name) {
        var json = [];
        for (d in data) {
            json.push(d.toJSON());
        }
        this.saveJSONToFile(path.resolve(filepath, name), json);
    };
    /**
     * THIS IS TERRIBLE DESIGN BELOW; NEEDS CORRECTION VIA SOME FLAVOR OF POLYMORPHISM
     *
     */
    //Return JSON trades from filepath, one set in class as default
    ObjectDB.prototype.loadData = function (DataClass, filepath, name) {
        var json = this.loadJSONFromFile(path.resolve(filepath, name));
        var data = [];
        for (j in json) {
            data.push(new DataClass(j));
        }
        return data;
    };
    return ObjectDB;
}(BasicDB));
module.exports = ObjectDB;
