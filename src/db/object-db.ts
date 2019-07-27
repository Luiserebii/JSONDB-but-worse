/**
 * ObjectDB is an extensible class meant to build upon BasicDB. 
 * 
 * The idea is, allow for saving objects that extend the Data class
 * 
 */

import BasicDB = require('./basic-db');
import path = require('path');

import JSONData = require('../basic/json-data');
import JSONDataConstructableI = require('../basic/json-data-constructable-i');

class ObjectDB extends BasicDB {

  /**
   *
   */
  saveData(data: JSONData[], filepath: string, name: string): void {

    let json: object[] = [];
    for(let d of data){
      json.push(d.toJSON());
    }
    this.saveJSONToFile(path.resolve(filepath, name), json);

  } 

  /**
   * THIS IS TERRIBLE DESIGN BELOW; NEEDS CORRECTION VIA SOME FLAVOR OF POLYMORPHISM
   *
   */
  //Return JSON trades from filepath, one set in class as default
  loadData(DataClass: JSONDataConstructableI, filepath: string, name: string): JSONData[] {

    const json = this.loadJSONFromFile(path.resolve(filepath, name));
    let data = [];
    for(let j in json){
      data.push(new DataClass(json[j]));
    }
    return data;

  }

}

export = ObjectDB;
