const express = require('express');
const mongoose = require('mongoose');
 
const cors = require('cors');


const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/school',{ useNewUrlParser: true });



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 

app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use('/api',require('./Routers/user/user'));
app.use('/api',require('./Routers/task/task'));

const PORT = 2000;
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
});