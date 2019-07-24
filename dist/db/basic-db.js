"use strict";
/*
 * BasicDB is an extensible class meant to provide basic loading, saving, and backing up of JSON files. Has no state, makes minimal assumptions, and provides low-level functions
 *
 */
var fs = require("fs");
var path = require("path");
var BasicDB = /** @class */ (function () {
    function BasicDB() {
    }
    /**
     * Very simple function, simply save a JSON to the given filepath
     *
     */
    BasicDB.prototype.saveJSONToFile = function (file, json) {
        if (!fs.existsSync(path.dirname(file))) {
            fs.mkdirSync(path.dirname(file));
        }
        else {
            var out = JSON.stringify(json);
            fs.writeFileSync(file, out);
        }
    };
    /**
     * Very simple function; simply load a JSON from the passed file.
     *
     */
    BasicDB.prototype.loadJSONFromFile = function (file) {
        if (!fs.existsSync(path.dirname(file))) {
            throw 'No existing data! Searched in the following directory: ' + path.dirname(file);
        }
        else {
            var contents = fs.readFileSync(file, 'utf8');
            return JSON.parse(contents);
        }
    };
    return BasicDB;
}());
module.exports = BasicDB;
