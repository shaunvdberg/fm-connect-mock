import express from 'express';
import path from 'path';
import router from './src/routes/routes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('port', process.env.PORT || 8082);
app.set('views', './src/views');
app.set('view engine', 'pug');

// app.use(express.static(path.join(__dirname, "/public")));
app.use('/', router);

app.listen(app.get('port'));

console.log('Listening on port ' + app.get('port'));