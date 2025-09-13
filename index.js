const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const cors = require('cors')
require("dotenv").config();
connectDB();

app.use(cors())
app.use(express.json());
app.use('/' , require('./routes/UserRoute'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});