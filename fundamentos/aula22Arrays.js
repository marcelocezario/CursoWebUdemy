const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10

console.log(valores[4])
console.log(valores)
console.log(valores.length)

/*
valores[10] = 15
console.log(valores)
console.log(valores.length)
*/

valores.push({id: 3, nome: 2, numero: 3}, false, null, 'teste') // adiciona elementos ao final do array
console.log(valores)

console.log(valores.pop()) // excluir o último elemento do array
console.log(valores)

console.log(valores.length)

console.log(typeof valores)


