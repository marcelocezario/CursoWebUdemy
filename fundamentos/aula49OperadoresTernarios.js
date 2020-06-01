const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(7.0))
console.log(resultado(6.9))

console.log(resultado2(7.0))
console.log(resultado2(6.9))