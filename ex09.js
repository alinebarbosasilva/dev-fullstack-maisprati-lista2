// 9. Conversão Entre Formatos Escreva duas funções: ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente. ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

const pares = [["nome", "Aline"], ["idade", 28]];
console.log(paresParaObjeto(pares));

const obj = { nome: "Aline", idade: 28 };
console.log(objetoParaPares(obj));