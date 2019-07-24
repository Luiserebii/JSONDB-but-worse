const BasicDB = require('./db/basic-db');
const ObjectDB = require('./db/object-db');
const JSONData = require('./basic/json-data');
const Util = require('./util/util');

module.exports = {
  'BasicDB': BasicDB,
  'ObjectDB': ObjectDB,
  'JSONData': JSONData,
  'Util': Util
}
