# JSONDB, but worse
[![npm version](https://badge.fury.io/js/jsondb-but-worse.svg)](https://badge.fury.io/js/jsondb-but-worse)
[![Build Status](https://travis-ci.org/Luiserebii/JSONDB-but-worse.svg?branch=master)](https://travis-ci.org/Luiserebii/JSONDB-but-worse)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Luiserebii/JSONDB-but-worse.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Luiserebii/JSONDB-but-worse/alerts/)

This project is the result of a misguided attempt to create a kind of JSON database API for, well, data storage, stored as JSONs.
<br/>

It is a very small, short project, which should get the job done. The simple idea is, extend the `ObjectDB` class, and build on top of the write/load functions. They are fairly simple, and self-explanatory (I hope). 

## Technical Details
Data objects, or objects meant to be stored in the DB, must extend class `JSONData`, which guarantees the existence of the `toJSON()` function. Any JSONData classes must also be prepared to accept a JSON in the constructor, as this is the construction used in order to load JSON objects from file to memory.
<br/>

The code should clear this up, in case this doesn't make sense. The end result would be to simplify the code to something like:
```
db.saveData(records, './data', 'records.json')
```
And of course, you can extend the `ObjectDB` class and build any OOP abstractions to simplify the above as you like (such as setting default directory and filenames).

## Developing
To test which files will be published, please use the script written instead of `npm pack` to allow for correct packing. These have been conveniently placed in npm scripting under the following:
`npm run n-pack`
`npm run n-publish`

And an additional convenience command:
`npm run clean`

will simply delete the .tgz left behind by `n-pack`.

## Advice
I really don't recommend you use this, it is flawed and very underdeveloped, but if you enjoy the attempted simplicity for any reason, knock yourself out. However, if you are a rational being, I highly suggest you use something actually good like [LevelDB](https://github.com/Level/level).

## Contributions
Any pull requests to this would be interesting, since I'm curious to see how this can be added to/changed in terms of design, lolol.
