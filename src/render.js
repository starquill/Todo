export function renderProjects(container,projects,selectedId) {
  container.innerHTML='';
  for( let i=0;i<projects.length;i++){
    const newDiv= document.createElement('div');
    newDiv.classList.add('project-item');
    newDiv.dataset.projectId = projects[i].id;
    if(projects[i].id===selectedId){
      newDiv.classList.add('active-project');
    }
    newDiv.textContent=projects[i].name;
    container.appendChild(newDiv);
  }
}

export function render(){
  renderProjects(projectListDiv,projects,selectedProjectId);
  const selectedProject=projects.find(project=> project.id === selectedProjectId)
  mainBar.innerHTML='';
  if(selectedProject){
    const projectTitle=document.createElement('h2');
    projectTitle.textContent= selectedProject.name;

    const todoList=document.createElement('ul');
    todoList.id='todo-list';

    selectedProject.todo.forEach(todo => {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');

      const priorityDiv=document.createElement('div');
      priorityDiv.classList.add('priority',todo.priority);

      const textDiv=document.createElement('div');
      textDiv.classList.add('text');
      textDiv.textContent=todo.title;

      todoItem.append(priorityDiv,textDiv);
      todoList.appendChild(todoItem);
    });

    const newTodoForm=document.createElement('form');
    newTodoForm.id='new_todo_form';
    newTodoForm.innerHTML=`
    <input type="text" name="todo-title" placeholder="New task" required/>
    <select name="priority">
      <option value="high">High Priority</option>
      <option value="medium">Medium Priority</option>
      <option value="low">Low Priority</option>
    </select>
    <button type="submit" class=submit>Add Todo</button>
    `;
    mainBar.appendChild(projectTitle);
    mainBar.appendChild(newTodoForm);
  }
  else{
    const welcomeMessage=document.createElement('p');
    welcomeMessage.textContent='Select a project to see its tasks, or add a new one!';
    mainBar.appendChild(welcomeMessage);
  }
}
