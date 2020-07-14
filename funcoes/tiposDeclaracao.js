console.log(soma(3, 4)) //funções são carregadas primeiro
console.log(sub(3, 4)) // resulta em erro pois const ainda não foi definida
console.log(mult(3, 4)) // resulta em erro pois const ainda não foi definida

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}