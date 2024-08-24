import express from 'express'; // butuh file express terinstall untuk bekerja (npm install express) dan butuh internet untuk install, node app.js pergi ke 127.0.1:3000 di layar 404 (127.0.1:3000/insert-anything-invalid-here) untuk kumpul
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get('/', (req, res) => {
//  res.send('<h1>Hello, Express!</h1>');
    res.sendFile('templates/index.html', { root:__dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('', );
});

app.get('/about-us', (req, res) => {
    res.redirect('about');
});

app.get('/contact', (req, res) => {
    // res.redirect('contact');
});

// middle ware
app.use('/', (req, res) => {
    res.status(404).send('<h1>404, oops not found</h1>')
});

app.listen(3000);
