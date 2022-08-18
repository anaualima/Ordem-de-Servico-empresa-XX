require('dotenv').config();
// const cors = require('cors');

const express = require('express');

const { routerClient } = require('../routes/client');
// const { routerTasks } = require('./routes/tasks');
// const { routerUser } = require('./routes/user');

const app = express();

// app.use(cors());

app.use(express.json());

app.use('/client', routerClient);
// app.use('/tasks', routerTasks);
// app.use('/registation', routerUser);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));