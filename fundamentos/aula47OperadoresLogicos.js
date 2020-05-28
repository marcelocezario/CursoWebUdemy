console.log('Tabela verdade')

console.log('E')
console.log('v e v -> (v)', true && true)
console.log('v e f -> (f)', true && false)
console.log('f e ? -> (f)', false && true)

console.log('Ou')
console.log('v ou ? -> (v)', true || false)
console.log('f ou v -> (v)', false || true)
console.log('f e f -> (f)', false || false)

console.log('Ou Exclusivo')
console.log('v xor v -> (f)', !!(true ^ true))
console.log('v xor f -> (v)', !!(true ^ false))
console.log('f xor v -> (v)', !!(false ^ true))
console.log('f xor f -> (f)', !!(false ^ false))

console.log('Negação lógica')
console.log('!v -> (f)', !true)
console.log('!f -> (v)', !false)

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho2 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
