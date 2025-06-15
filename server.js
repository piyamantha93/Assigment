const express = require('express');
const cros = require('cors');
require('dotenv').config();
require('./db/connection');


const userRouter = require('./router/user');
const productRouter = require('./router/product');

const app = express();
app.use(cros());    
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 

