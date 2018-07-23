const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //retorna o valor do índice na tabela asc unicode
console.log(escola.indexOf('d')) //índice que se encontra o caracter "d"

console.log(escola.substring(1)) //caracteres a partir do índice 1
console.log(escola.substring(0,3)) //caracteres a partir do indice 0 e menor que indice 3 sem incluir o 3

console.log('Escola '.concat(escola).concat("!")) // concatenar, pode ser usado o sinal  "+" também
console.log(escola.replace(3, 'e')) //substitui o caractere na exibição

console.log(escola.replace(/\d/,'e')) //expressão regular, substitui o primeiro número pela letra "e"
console.log(escola.replace(/\d/g,'e')) //expressão regular, substitui todos números pela letra "e" (g - global)
console.log(escola.replace(/\w/g,'e')) //expressão regular, substitui todos os caracteres pela letra "e"

console.log('Ana,Maria,Pedro'.split(',')) // utiliza que o foi colocado como separador e gera um array

