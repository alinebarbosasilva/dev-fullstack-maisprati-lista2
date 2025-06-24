// 8. Agrupamento por Propriedade Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total;
        return acumulador;
    }, {});
}

const vendas = [
    { cliente: "Aline", total: 100 },
    { cliente: "Jacques", total: 200 },
    { cliente: "Aline", total: 70 }
];

console.log(agruparVendasPorCliente(vendas));