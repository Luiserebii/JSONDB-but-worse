/**

  Since we're having a weird pattern where we receive a class definition, and simply passing the type of the class only really means we are passing an instance of that type of class (NOT the class def itself), we're making a kind of "constructable" interface here which we can use

  See: https://stackoverflow.com/questions/13407036/how-does-interfaces-with-construct-signatures-work

*/

import JSONDataI = require('./json-data-i');

interface JSONDataConstructableI {
    new(json: object): JSONDataI;
}

export = JSONDataConstructableI;
