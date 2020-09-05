// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não.

// function temHabilidade(skills) {
//  // código aqui
// }

// var skills = ["Javascript", "ReactJS", "React Native"];
// temHabilidade(skills); // true ou false

// Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

function temHabilidade(skills)
{
    hasSkill = (skills.indexOf("Javascript") != '-1') ? true : false
    console.log(hasSkill);
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false