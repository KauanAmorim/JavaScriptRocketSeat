// Dado o seguinte vetor de objetos:

// var usuarios = [
//     {
//         nome: "Diego",
//         habilidades: ["Javascript", "ReactJS", "Redux"]
//     },
//     {
//         nome: "Gabriel",
//         habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
//     }
// ];

// Escreva uma função que produza o seguinte resultado:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
// Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
// com um separador utilize o join.


var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function displayUserSkills(users)
{
    let validArray = (Array.isArray(usuarios) && usuarios.length > 0) ? true : false;
    if(validArray){
        for (const user of users) {
            let skills = user.habilidades.join(', ');
            console.log(
                `O ${user.nome} possui as habilidades: ${skills}`
            );
        }
    }
}

displayUserSkills(usuarios)
