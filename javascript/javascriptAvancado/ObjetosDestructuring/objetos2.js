const filmes = [
    {
        id: 1,
        titulo: "Dilema das redes",
        descricao: "doc sobre tecnologia",
        duracao: 120

    },
    {
        id: 2,
        titulo: "US",
        descricao: "Filme de terror",
        duracao: 120

    },
    {
        id: 3,
        titulo: "harry potter",
        descricao: "Filme bruxo",
        duracao: 120

    },

]

const[{ id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme.descricao))



