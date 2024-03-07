const express=require("express");
const bodyParser=require("body-parser")
const router=require("./routes/routes")
const { Sequelize, DataTypes } = require('sequelize');
const sequelize= require("./util/database")
var cors = require('cors')



const app=express();
app.use(cors())
app.use(bodyParser.json());
app.use(router);
  
 
  (async () => {
    try {
      await sequelize.sync();
      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();