import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Task from './backend/models/taskModel.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'views'));

app.use(express.static('public'));

const tasks = [];

const task1 = new Task(1, 'Estudar para a prova', 'Capítulo 5 de Algoritmos');
const task2 = new Task(2, 'Enviar relatório', 'Até sexta-feira');

tasks.push(task1, task2);

app.get('/', (request, response) => {
    response.redirect('/testIndex');
});

app.get('/testIndex', (request, response) => {
    response.render("testIndex", { tasks });
});

app.listen(8080, () => {
    console.log("Iniciei o servidor da silva");
});
