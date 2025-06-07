export class Project{
    constructor(name){
        this.name=name;
        this.todo=[];
    }
    addTodo(todo){
        this.todo.push(todo);
    }
}
export class Todo{
    constructor(title,description,priority,date){
        this.title=title;
        this.description=description;
        this.priority=priority;
        this.date=date;
    }
}

