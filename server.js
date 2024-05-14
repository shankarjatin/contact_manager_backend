const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
var cron = require('node-cron');
const dotenv = require("dotenv").config()
const app = express()
const port =process.env.PORT || 5000 ;
 connectDb();
app.use(express.json());
app.use(errorHandler)
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));


cron.schedule('*/10 * * * * *', () => {
    console.log('This message will be printed to the console every 10 seconds');
  });

app.listen(port ,()=>{
    console.log(`hello to ${port}`)
})