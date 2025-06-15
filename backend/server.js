const express = require("express");
const app = express();
require("dotenv").config();
const dbconnect = require('./configs/DBconnection')
const cors = require('cors');



app.use(cors());


const routes = require('./routes/Index.routes')


app.use(express.json());


dbconnect()

app.use('/api',routes)

app.listen(process.env.PORT, () => {
  console.log(`Server runs on port ${process.env.PORT}`);
});
