// Crie uma função que dado o objeto a seguir:

// var endereco = {
//  rua: "Rua dos pinheiros",
//  numero: 1293,
//  bairro: "Centro",
//  cidade: "São Paulo",
//  uf: "SP"
// };

// Retorne o seguinte conteúdo:

// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// nº 1293

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function displayAddress(Address)
{
    if(validProperties(Address)){
        return `O usuário mora em ${Address.cidade} / ${Address.uf}, no bairro ${Address.bairro}, na rua "${Address.rua}" com o n° ${Address.numero}`;
    } else {
        return `Erro nas propriedades do Objetos Address`;
    }
}

function validProperties(Address)
{
    return (
        (typeof(Address.cidade) != "undefined" && Address.cidade != '') &&
        (typeof(Address.cidade) != "undefined" && Address.uf != '') &&
        (typeof(Address.cidade) != "undefined" && Address.bairro != '') &&
        (typeof(Address.cidade) != "undefined" && Address.rua != '') &&
        (typeof(Address.cidade) != "undefined" && Address.numero != '')
    );
}



console.log(displayAddress(endereco));


