const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'sql222.main-hosting.eu',
  user     : 'u459302695_IFCAdmin',
  password : 'admin',
  database : 'u459302695_IFRJCode'
});