// E:\Projetos e Cursos Faculdade\Portfolio V2\app.js

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import experiencias from './data/experiencia.json' with { type: 'json' };

// Importando o JSON com a sintaxe moderna (import assertion)
import projetos from './data/projetos.json' with { type: 'json' };

// Configuração para usar __dirname com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// ... resto do código do servidor ...
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    // Agora estamos enviando um objeto com dados para a view
    res.render('index', { 
        pageTitle: "Início | Portfólio Isaac Santos",
        nome: "Isaac Santos"
    });
});


app.get('/projetos', (req, res) => {
    res.render('projetos', { projetos: projetos });
});

app.get('/sobre', (req, res) => {
    res.render('sobre', { 
        pageTitle: "Sobre Mim | Isaac Santos"
    });
});

app.get('/experiencia', (req, res) => {
    res.render('experiencia', { 
        pageTitle: "Minha Experiência",
        experiencias: experiencias 
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});