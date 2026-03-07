const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

const animes = [
  {
    id: 1,
    anime: "Naruto",
    gênero: "Ação, Aventura, Fantasia",
    protagonista: "Naruto Uzumaki",
  },
  {
    id: 2,
    anime: "Dragon Ball Z",
    gênero: "Ação, Artes Marciais, Fantasia",
    protagonista: "Goku",
  },
  {
    id: 3,
    anime: "One Piece",
    gênero: "Ação, Aventura, Comédia",
    protagonista: "Monkey D. Luffy",
  },
  {
    id: 4,
    anime: "Death Note",
    gênero: "Mistério, Thriller, Sobrenatural",
    protagonista: "Light Yagami",
  },
  {
    id: 5,
    anime: "Attack on Titan",
    gênero: "Ação, Drama, Fantasia",
    protagonista: "Eren Yeager",
  },
  {
    id: 6,
    anime: "Fullmetal Alchemist: Brotherhood",
    gênero: "Ação, Aventura, Fantasia",
    protagonista: "Edward Elric",
  },
];

app.get("/", (req, res) => {
  res.send("API de animes está funcionando!");
});

app.get("/animes", (req, res) => {
  res.json(animes);
});

// -------- Atributos de Rota por ID --------

app.get("/animes/:id", (req, res) => {
  const animeId = parseInt(req.params.id);
  const findAnime = animes.find((animes) => animes.id === animeId);
  res.json(findAnime);
});

// ------ Cadastrando um novo anime --------

app.post("/animes", (req, res) => {
  const newAnime = {
    id: animes.length + 1,
    anime: req.body.anime,
    gênero: req.body.gênero,
    protagonista: req.body.protagonista,
  };

  animes.push(newAnime);
  res.send(`Anime ${newAnime.anime} cadastrado com sucesso!`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
