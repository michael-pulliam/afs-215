const express = require('express');
const app = express();
const todoRouter = require('./routes/todoRoutes');
const PORT = 5000;
app.use(express.json());
app.use('/', todoRouter);
app.listen(PORT, () => {
    console.log('app running PORT 5000')
})