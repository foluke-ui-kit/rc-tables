# RC-Tables

A simple and easy to use set of ES6 classes for building react table components

## Install

__Via NPM__

`npm i @shawnsandy/rc-tables`


__Via GitHub Download__

 - Download the [latest release here (zip/tarball)](https://github.com/foluke-ui-kit/rc-tables/releases)
 
 
## Usage 

__Sample Component__

 ```js
 
import React from 'react';

import { RcTable } from '../src/libs/rc-table.jsx';

var data = [{"id":1,"first_name":"Beth","last_name":"Leffler","ssn":"351875239","username":"ludwig","password":"atnobisiusto","gender":"female","created_at":"2015-06-03T00:26:26.884Z","updated_at":"2015-06-03T00:26:26.884Z"},
{"id":2,"first_name":"Clair","last_name":"Hackett","ssn":"516821623","username":"erwin.hoeger","password":"doloroptioest","gender":"female","created_at":"2015-06-03T00:26:26.891Z","updated_at":"2015-06-03T00:26:26.891Z"},
{"id":3,"first_name":"Mozell","last_name":"Towne","ssn":"839629327","username":"jerrold.gusikowski","password":"aliasrepudiandae","gender":"male","created_at":"2015-06-03T00:26:26.897Z","updated_at":"2015-06-03T00:26:26.897Z"},
{"id":4,"first_name":"Ryder","last_name":"Vandervort","ssn":"661511919","username":"brandt","password":"atquietmagnam","gender":"male","created_at":"2015-06-03T00:26:26.902Z","updated_at":"2015-06-03T00:26:26.902Z"},
{"id":5,"first_name":"Antonetta","last_name":"Sanford","ssn":"738357127","username":"donavon_dickens",
"password":"dictanonlaborios","gender":"female","created_at":"2015-06-03T00:26:26.906Z","updated_at":"2015-06-03T00:26:26.906Z"},
{"id":6,"first_name":"Shane","last_name":"Haley","ssn":"133632359","username":"stacy",
"password":"etexplicabodolor","gender":"female","created_at":"2015-06-03T00:26:26.908Z","updated_at":"2015-06-03T00:26:26.908Z"},
{"id":7,"first_name":"Daryl","last_name":"Russel","ssn":"415773421","username":"calista","password":"sequiestest","gender":"male","created_at":"2015-06-03T00:26:26.910Z","updated_at":"2015-06-03T00:26:26.910Z"},
{"id":8,"first_name":"Laura","last_name":"Lemke","ssn":"375585990","username":"jaquan","password":"autsuscipitinven","gender":"female","created_at":"2015-06-03T00:26:26.913Z","updated_at":"2015-06-03T00:26:26.913Z"},
{"id":9,"first_name":"Brandy","last_name":"Will","ssn":"221235210","username":"lamar.boyle","password":"cumqueautin","gender":"female","created_at":"2015-06-03T00:26:26.916Z","updated_at":"2015-06-03T00:26:26.916Z"},
{"id":10,"first_name":"Keagan","last_name":"Bayer","ssn":"686033874","username":"israel_senger","password":"beataemolestiasn","gender":"female","created_at":"2015-06-03T00:26:26.918Z","updated_at":"2015-06-03T00:26:26.918Z"},
{"id":11,"first_name":"Rahsaan","last_name":"Schiller","ssn":"638404023","username":"maryjane","password":"voluptatemvitaee","gender":"male","created_at":"2015-06-03T00:26:26.920Z","updated_at":"2015-06-03T00:26:26.920Z"}];

var cols = ['ID','First Name','Last Name'];

var colsTables = ['id','first_name','last_name'];

React.render(<RcTable data={data} cols={cols} colTables={colsTables} />, document.getElementById('component'));
 
```

## Contribute

 1. [Submit an issue](https://github.com/foluke-ui-kit/rc-tables/issues)
 2. Fork the repository
 3. Create a dedicated branch (never ever work in `master`)
 4. Fix bugs or implement features
 5. Always write tests

## History

Please see the release note [Releases](https://github.com/foluke-ui-kit/rc-tables/releases/)


## TODO

* ...
* ...


## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
