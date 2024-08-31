import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get('/', (req, res) => {
//  res.send('<h1>Hello, Express!</h1>');
    res.sendFile('templates/index.html', { root:__dirname});
});

app.get('/solo', (req, res) => {
    res.sendFile('templates/solo.html', { root:__dirname});
});

app.get('/coop', (req, res) => {
    res.sendFile('templates/coop.html', { root:__dirname});
});

app.get('/settings', (req, res) => {
    res.sendFile('templates/settings.html', { root:__dirname});
});

app.get('/credits', (req, res) => {
    res.sendFile('templates/credits.html', { root:__dirname});
});

// app.get('/about-us', (req, res) => {
//     res.redirect('solo');
// });

// middle ware
app.use(express.static('public'));
app.use('/', (req, res) => {
    res.status(404).send('<h1>404, oops not found</h1>')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
