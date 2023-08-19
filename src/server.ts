const express = require('express');
import routes from './routes';
const app = express();

require('./database');

app.use(express.json());
app.use(routes);
app.listen(3030, () => console.log("Server started"));