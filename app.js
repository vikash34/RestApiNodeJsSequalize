//global packages
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sqldb/database');

//local packages
const routes = require('./routes');
// const db = require('./util/database');


//process 
const app = express();

const port= process.env.port || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



app.use(routes);

sequelize.sync().then(result=>{
    console.log('Application running on '+port);
    app.listen(port);
}).catch(err=>{
    console.log(err);
});
