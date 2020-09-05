// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
// function experiencia(anos) {
//  // código aqui
// }

// var anosEstudo = 7;
// experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

function experiencia(anos) {
    switch (anos) {
        case 0:
        case 1:
            return 'Iniciante';
        case 2:
        case 3:
            return 'Intermediário';
        case 4:
        case 5:
        case 6:
            return 'Avançado';
        case 7:
            console.log(anos);
            return 'Jedi Master';
        default:
            return 'Experiência Bugada';
    }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));
