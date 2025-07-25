export class Project {
  constructor(name) {
    this.id=Date.now().toString();
    this.name = name;
    this.todo = [];
  }
}
export class Todo {
  constructor(title, priority, date) {
    this.title = title;
    this.priority = priority;
    this.id = Date.now().toString();
  }
}
