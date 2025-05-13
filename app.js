import express from 'express';
import ejs from 'ejs';
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.redirect('/index');
});

app.get('/index', (request, response) => {
    response.render('index');
});

app.listen(8080, () => {
    console.log("Iniciei o servidor da silva")
});