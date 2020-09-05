// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
// function pares(x, y) {
//  // código aqui
// }
// pares(32, 321);

function pares(inicio, fim)
{
    for (let intervalo = inicio; intervalo <= fim; intervalo++) {
        let par = intervalo % 2;
        if(par == 0){
            console.log(intervalo);
        }
    }
}

pares(32, 321);
