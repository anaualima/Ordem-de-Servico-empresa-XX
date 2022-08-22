require('dotenv').config();
const cors = require('cors');

const express = require('express');

const { routerClient } = require('../routes/client');
const { routerCollaborator } = require('../routes/collaborator');
const { routerOrder } = require('../routes/order');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/client', routerClient);
app.use('/collaborator', routerCollaborator);
app.use('/order', routerOrder);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));