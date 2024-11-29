const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');
var cron = require('node-cron');
const { default: axios } = require("axios");
const dotenv = require("dotenv").config()
const app = express()
const port =process.env.PORT || 5000 ;
 connectDb();
app.use(express.json());
app.use(cors());
app.use(errorHandler)
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.get('/', (req, res) => {
  res.send('Server is running and active!');
});

cron.schedule('**/20 * * * * *', async () => {
  try {
    console.log('Pinging server to keep it awake...');
    // Change this to your actual server's public URL
    await axios.get('https://contact-manager-backend-2.onrender.com/');
    console.log('Server pinged successfully');
  } catch (error) {
    console.error('Error pinging the server:', error.message);
  }
});
app.listen(port ,()=>{
    console.log(`hello to ${port}`)
})