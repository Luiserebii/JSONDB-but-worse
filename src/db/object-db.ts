/**
 * ObjectDB is an extensible class meant to build upon BasicDB. 
 * 
 * The idea is, allow for saving objects that extend the Data class
 * 
 */

const BasicDB = require('./basic-db');

class ObjectDB extends BasicDB {

  /**
   *
   */
  saveData(data, filepath, name){

    let json = [];
    for(d in data){
      json.push(d.toJSON());
    }
    this.saveJSONToFile(path.resolve(filepath, name), json);

  } 

  /**
   * THIS IS TERRIBLE DESIGN BELOW; NEEDS CORRECTION VIA SOME FLAVOR OF POLYMORPHISM
   *
   */
  //Return JSON trades from filepath, one set in class as default
  loadData(DataClass, filepath, name) {

    const json = this.loadJSONFromFile(path.resolve(filepath, name));
    let data = [];
    for(j in json){
      data.push(new DataClass(j));
    }
    return data;

  }

}

module.exports = ObjectDB;
