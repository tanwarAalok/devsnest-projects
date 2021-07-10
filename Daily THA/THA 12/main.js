const input = document.querySelector('input');
const add = document.querySelector('#add');
const todolist = document.querySelector('.tasks');
const del = document.querySelector('#delete');

add.addEventListener('click', () => {
    const newTodo = document.createElement('li');
    newTodo.innerHTML = input.value;
    todolist.appendChild(newTodo);
    del.classList.remove('show');
    input.value = '';
});

del.addEventListener('click', () => {
    todolist.innerHTML = '';
    del.classList.add('show');
})
