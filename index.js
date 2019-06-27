const BasicDB = require('./src/db/basic-db');
const ObjectDB = require('./src/db/object-db');
const JSONData = require('./src/basic/json-data');
const Util = require('./src/util/util');

module.exports = {
  'BasicDB': BasicDB,
  'ObjectDB': ObjectDB,
  'JSONData': JSONData,
  'Util': Util
}
