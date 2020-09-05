var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos()
{
    listElement.innerHTML = '';
    for (todo of todos){

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var position = todos.indexOf(todo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodo('+ position +')');
        
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo()
{
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}


buttonElement.onclick = addTodo;

function deleteTodo(position)
{
    todos.splice(position, 1);
    renderTodos();
}

/**
 * Alternativas que passaram na minha mente.
 */
// function addTodoOpcional()
// {
//     var todoText = inputElement.value;
//     var todoElement = document.createElement('li');

//     inputElement.value = '';
//     todoText = document.createTextNode(todoText);
//     todoElement.appendChild(todoText);
//     listElement.appendChild(todoElement);
// }

// buttonElement.onclick = addTodoOpcional;