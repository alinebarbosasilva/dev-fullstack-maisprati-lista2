# Dev Fullstack +Prati - Lista 2: Exercícios

Este repositório contém a **Lista 2 de Exercícios** do curso de **Desenvolvimento Fullstack**. Os exercícios cobrem conceitos avançados de lógica, estruturas de controle, funções, recursão, e manipulação de arrays e objetos em JavaScript.

## Estrutura do Repositório

O repositório contém arquivos `.js` separados para cada exercício da lista. Cada arquivo implementa a solução correspondente a um exercício.

### Exercícios

1. **Validação de Datas**: Implementa a função `ehDataValida(dia, mes, ano)` para verificar se uma data é válida, considerando anos bissextos e número correto de dias por mês.  
2. **Jogo de Adivinhação**: Gera um número aleatório de 1 a 100 e permite que o usuário tente adivinhar, dando dicas "mais alto" ou "mais baixo".  
3. **Palavras Únicas**: Recebe uma string e retorna um array com todas as palavras únicas usando `for` e `if/else`.  

4. **Fatorial Recursivo**: Implementa a função `fatorial(n)` recursiva, tratando erros para `n < 0` e retornando 1 para `n === 0`.  
5. **Debounce**: Cria a função `debounce(fn, delay)` que limita a frequência de execução de uma função.  
6. **Memoization**: Implementa a função `memoize(fn)` para armazenar em cache resultados de chamadas anteriores e acelerar chamadas repetidas.  

7. **Mapeamento e Ordenação**: Dado um array de produtos `{ nome, preco }`, retorna um array só com os nomes, ordenados por preço crescente.  
8. **Agrupamento por Propriedade**: Agrupa vendas `{ cliente, total }` somando os totais por cliente usando `reduce`.  
9. **Conversão Entre Formatos**:  
   - `paresParaObjeto(pares)`: converte array de pares `[chave, valor]` em objeto.  
   - `objetoParaPares(obj)`: converte objeto em array de pares `[chave, valor]`.  

## Como Rodar os Exercícios

### Pré-requisitos

Antes de executar os exercícios, você precisa ter o **Node.js** e o **npm** instalados no seu sistema. Se ainda não tem o Node.js instalado, [clique aqui](https://nodejs.org/) para fazer o download.

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/alinebarbosasilva/dev-fullstack-maisprati-lista2.git
   
Navegue até o diretório do projeto:
   ```bash
  cd dev-fullstack-maisprati-lista2
  ``` 
### Para garantir que tudo funcione corretamente, execute:

 ```bash
npm install
```
### Execute os exercícios:
Cada exercício é um arquivo .js separado. Para rodar qualquer exercício, basta utilizar o Node.js com o seguinte comando:

 ```bash
node nome-do-arquivo.js
Exemplo para rodar o primeiro exercício:
node ex01.js
```
