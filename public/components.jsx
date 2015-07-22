/**
 * Created by shawnsandy on 6/4/15.
 */

//var React = require("react");
//var DataTables = require('../src/libs/rts-datatables.jsx');

import React from 'react';
import DataTables from '../src/libs/rc-table.jsx';
var data = [{"id":1,"first_name":"Beth","last_name":"Leffler","ssn":"351875239","username":"ludwig","password":"atnobisiusto","gender":"female","created_at":"2015-06-03T00:26:26.884Z","updated_at":"2015-06-03T00:26:26.884Z"},{"id":2,"first_name":"Clair","last_name":"Hackett","ssn":"516821623","username":"erwin.hoeger","password":"doloroptioest","gender":"female","created_at":"2015-06-03T00:26:26.891Z","updated_at":"2015-06-03T00:26:26.891Z"},{"id":3,"first_name":"Mozell","last_name":"Towne","ssn":"839629327","username":"jerrold.gusikowski","password":"aliasrepudiandae","gender":"male","created_at":"2015-06-03T00:26:26.897Z","updated_at":"2015-06-03T00:26:26.897Z"},{"id":4,"first_name":"Ryder","last_name":"Vandervort","ssn":"661511919","username":"brandt","password":"atquietmagnam","gender":"male","created_at":"2015-06-03T00:26:26.902Z","updated_at":"2015-06-03T00:26:26.902Z"},{"id":5,"first_name":"Antonetta","last_name":"Sanford","ssn":"738357127","username":"donavon_dickens","password":"dictanonlaborios","gender":"female","created_at":"2015-06-03T00:26:26.906Z","updated_at":"2015-06-03T00:26:26.906Z"},{"id":6,"first_name":"Shane","last_name":"Haley","ssn":"133632359","username":"stacy","password":"etexplicabodolor","gender":"female","created_at":"2015-06-03T00:26:26.908Z","updated_at":"2015-06-03T00:26:26.908Z"},{"id":7,"first_name":"Daryl","last_name":"Russel","ssn":"415773421","username":"calista","password":"sequiestest","gender":"male","created_at":"2015-06-03T00:26:26.910Z","updated_at":"2015-06-03T00:26:26.910Z"},{"id":8,"first_name":"Laura","last_name":"Lemke","ssn":"375585990","username":"jaquan","password":"autsuscipitinven","gender":"female","created_at":"2015-06-03T00:26:26.913Z","updated_at":"2015-06-03T00:26:26.913Z"},{"id":9,"first_name":"Brandy","last_name":"Will","ssn":"221235210","username":"lamar.boyle","password":"cumqueautin","gender":"female","created_at":"2015-06-03T00:26:26.916Z","updated_at":"2015-06-03T00:26:26.916Z"},{"id":10,"first_name":"Keagan","last_name":"Bayer","ssn":"686033874","username":"israel_senger","password":"beataemolestiasn","gender":"female","created_at":"2015-06-03T00:26:26.918Z","updated_at":"2015-06-03T00:26:26.918Z"},{"id":11,"first_name":"Rahsaan","last_name":"Schiller","ssn":"638404023","username":"maryjane","password":"voluptatemvitaee","gender":"male","created_at":"2015-06-03T00:26:26.920Z","updated_at":"2015-06-03T00:26:26.920Z"}];
var cols = ['ID','First Name','Last Name'];
var colsTables = ['id','first_name','last_name'];

React.render(<DataTables data={data} cols={cols} colTables={colsTables} />, document.getElementById('component'));

