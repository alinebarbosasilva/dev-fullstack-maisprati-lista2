// 7. Mapeamento e Ordenação Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

function obterNomesOrdenadosPorPreco(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

const produtos = [
    { nome: "Teclado Mecânico", preco: 350 },
    { nome: "Mouse Red Dragon", preco: 150 },
    { nome: "Monitor Concórdia", preco: 899 }
];

console.log(obterNomesOrdenadosPorPreco(produtos));