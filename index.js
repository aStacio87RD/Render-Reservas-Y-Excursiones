require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const reservas = require('./routes/reservas');
const excursiones = require('./routes/excursiones');
const login = require('./routes/login');
const pagos = require('./routes/pagos');

app.use(cors());
app.use(express.json());

app.use('/api/reservas', reservas);
app.use('/api/excursiones', excursiones);
app.use('/api/login-admin', login);
app.use('/api', pagos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
