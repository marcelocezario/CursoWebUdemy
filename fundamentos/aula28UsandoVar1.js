// Variável fora da função é uma variável global
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
}

teste()
//console.log(local) // variável fora do escopo