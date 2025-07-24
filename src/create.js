export class Project {
  constructor(name) {
    this.id=Date.now().toString();
    this.name = name;
    this.todo = [];
  }
  addTodo(todo) {
    this.todo.push(todo);
  }
}
export class Todo {
  constructor(title, priority, date) {
    this.title = title;
    this.priority = priority;
    this.date = Date.now().toString();
  }
}
