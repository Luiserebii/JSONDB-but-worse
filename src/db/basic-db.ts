/*
 * BasicDB is an extensible class meant to provide basic loading, saving, and backing up of JSON files. Has no state, makes minimal assumptions, and provides low-level functions
 * 
 */

class BasicDB {

  /**
   * Very simple function, simply save a JSON to the given filepath
   *
   */

  saveJSONToFile(file, json) {
    if(!fs.existsSync(path.dirname(file))){
      fs.mkdirSync(path.dirname(file));
    } else {
      const out = JSON.stringify(json);
      fs.writeFileSync(file, out);
    }
  } 

  /**
   * Very simple function; simply load a JSON from the passed file.
   * 
   */
  loadJSONFromFile(file) {
    if(!fs.existsSync(path.dirname(file))) {
      throw 'No existing data! Searched in the following directory: ' + path.dirname(file);
    } else {
      const contents = fs.readFileSync(file);
      return JSON.parse(contents);
    }
  }

}

export = BasicDB;