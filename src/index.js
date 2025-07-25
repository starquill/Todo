import { Project } from "./create";
import { render } from "./render";
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

render();