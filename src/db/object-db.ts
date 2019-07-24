/**
 * ObjectDB is an extensible class meant to build upon BasicDB. 
 * 
 * The idea is, allow for saving objects that extend the Data class
 * 
 */

import BasicDB = require('./basic-db');
import path = require('path');

import JSONData = require('../basic/json-data');

class ObjectDB extends BasicDB {

  /**
   *
   */
  saveData(data: JSONData[], filepath: string, name: string): void {

    let json: JSONData[] = [];
    for(let d in data){
      json.push(d.toJSON());
    }
    this.saveJSONToFile(path.resolve(filepath, name), json);

  } 

  /**
   * THIS IS TERRIBLE DESIGN BELOW; NEEDS CORRECTION VIA SOME FLAVOR OF POLYMORPHISM
   *
   */
  //Return JSON trades from filepath, one set in class as default
  loadData(DataClass: JSONData, filepath: string, name: string): JSONData[] {

    const json = this.loadJSONFromFile(path.resolve(filepath, name));
    let data = [];
    for(let j in json){
      data.push(new DataClass(j));
    }
    return data;

  }

}

export = ObjectDB;
