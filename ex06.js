// 6. Memoization Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const somaLenta = (a, b) => {
    console.log('Calculando, informe dois números...');
    return a + b;
};

const somaMemoize = memoize(somaLenta);

console.log(somaMemoize(7, 7));
console.log(somaMemoize(7, 7));
