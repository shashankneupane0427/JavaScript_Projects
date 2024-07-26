import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let notes = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { notes, editNote: null, editIndex: -1 });
});

app.post('/add', (req, res) => {
    const { title, content } = req.body;
    if (title && content) {
        notes.push({ title, content });
    }
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const { index } = req.body;
    notes.splice(index, 1);
    res.redirect('/');
});

app.post('/edit', (req, res) => {
    const { index } = req.body;
    res.render('index', { notes, editNote: notes[index], editIndex: index });
});

app.post('/update', (req, res) => {
    const { index, title, content } = req.body;
    notes[index] = { title, content };
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
