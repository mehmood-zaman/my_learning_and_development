import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  const todo = response.data as Todo;
  logTodo(todo.id, todo.title, todo.completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Todo Id is ${id}
    title  is ${title}
    status is ${completed}
    `);
};
