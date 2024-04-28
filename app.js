const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Conectado ao MongoDB');
  }).catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
  });

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
  });

  const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
