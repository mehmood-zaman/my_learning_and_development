import axios from "axios";

let url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  console.log(response.data);
  const todo = response.data as Todo;
  let id = todo.id;
  let completed = todo.completed;
  let title = todo.title;
  console.log(`
  id: ${id}
  completed: ${completed}
  title: ${title}
  `);
});
