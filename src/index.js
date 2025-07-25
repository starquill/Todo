import { Project } from "./create";
import { renderProjects } from "./render";
import { Todo } from "./create";

import "./style.css";

const mainBar = document.querySelector('.mainBar');
const showForm = document.querySelector(".showForm");
const form = document.getElementById("project-form");
const formText = document.getElementById("project-name");
const projectListDiv = document.getElementById("project-list");
const sub = document.querySelector(".submit");
const projects = [];
let selectedProjectId=null;



showForm.addEventListener("click", () => {
  form.style.display = "flex";
  showForm.style.display = "none";
});
sub.addEventListener("click",()=>{
  form.style.display = "none";
  showForm.style.display = "flex";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = formText.value.trim();
  if (input === '') return;
  formText.value = '';
  const newProject = new Project(input);
  projects.push(newProject);
  render();
});

projectListDiv.addEventListener('click',(e)=>{
  if(e.target.classList.contains('project-item')){
    selectedProjectId=e.target.dataset.projectId;
    render();
  }
})
mainBar.addEventListener('submit',(e)=>{
  if(e.target.id === 'new_todo_form'){
    e.preventDefault();
    const todoTitle=e.target.elements['todo-title'].value.trim();
    const priority=e.target.elements['priority'].value;
    if(todoTitle==='')return;
    const newTodo=new Todo(todoTitle,priority);
    const selectedProject=projects.find(project=>project.id===selectedProjectId);
    selectedProject.todo.push(newTodo);
    render();
  }
});


function render(){
  renderProjects(projectListDiv,projects,selectedProjectId);
  const selectedProject=projects.find(project=> project.id === selectedProjectId)
  mainBar.innerHTML='';
  if(selectedProject){
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = selectedProject.name;

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete-project-btn');
    deleteProjectBtn.textContent = 'Delete Project';
    
    projectHeader.append(projectTitle, deleteProjectBtn);


    const todoList=document.createElement('ul');
    todoList.id='todo-list';

    selectedProject.todo.forEach(todo => {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
      todoItem.dataset.id=todo.id;

      const priorityDiv=document.createElement('div');
      priorityDiv.classList.add('priority',todo.priority);

      const textDiv=document.createElement('div');
      textDiv.classList.add('text');
      textDiv.textContent=todo.title;

      const deleteBtn= document.createElement('button');
      deleteBtn.classList.add('delete_todo_btn');
      deleteBtn.innerHTML='&times;';

      todoItem.append(priorityDiv,textDiv,deleteBtn);
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
    mainBar.append(projectHeader, todoList, newTodoForm);
  }
  else{
    const welcomeMessage=document.createElement('p');
    welcomeMessage.textContent='Select a project to see its tasks, or add a new one!';
    mainBar.appendChild(welcomeMessage);
  }
}

mainBar.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete_todo_btn')){

    const selectedProject=projects.find(project => project.id === selectedProjectId)
    if(!selectedProject)
      return;

    const todoId=e.target.closest('.todo-item').dataset.id;
    selectedProject.todo=selectedProject.todo.filter(todo => todo.id!=todoId);
    render();
}
  if(e.target.classList.contains('delete_project_btn')){
    projects=projects.filter(project=> project.id!=selectedProjectId);
    selectedProjectId=null;
    render();
  }
});

render();