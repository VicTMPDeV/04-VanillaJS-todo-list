import { Todo } from "./classes";

//HTML References
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

//Functions
export const createTodoTemplate = ( task ) => {

    const todoElement = `
        <li class="${(task.completed)?'completed':''}" data-id="${task.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(task.completed)?'checked':''}>
                <label>${task.todo}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `
    const container = document.createElement('div');
    container.innerHTML = todoElement;

    divTodoList.append(container.firstElementChild); //EFECTO COLATERAL -> Quizá sería responsabilidad de otra función?

    return container.firstElementChild;
}

//Events
txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0) {
        const addTodo = new Todo( txtInput.value );
        // console.log(txtInput.value)
    }
})