require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(PORT, () =>  console.log(`Server running - Port ${PORT}`));