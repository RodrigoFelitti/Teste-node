import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

const router  = require('./backend/routes');

app.use(router);

app.listen(8080, () => {
    console.log("Iniciei o servidor da silva");
});
