import {Todo, TodoList} from './js/classes' //VA A BUSCAR EL INDEX.JS QUE TENGA LA CARPETA
import { createTodoTemplate } from './js/componentes';
import './styles.css';

const todo = new Todo('Aprender JAVASCRIPT');

console.log(todo);

const todoList = new TodoList();
todoList.addTodo(todo);

console.log(todoList);


createTodoTemplate( todo );
