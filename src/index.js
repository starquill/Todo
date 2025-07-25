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

function render(){
  renderProjects(projectListDiv,projects,selectedProjectId);
  const selectedProject=projects.find(project=> project.id === selectedProjectId)
  mainBar='';
  if(selectedProject){
    const projectTitle=document.createElement('h2');
    projectTitle.textContent= selectedProject.name
  }
  else{
    const welcomeMessage=document.createElement('p');
    welcomeMessage.textContent='Select a project to see its tasks, or add a new one!';
    mainBar.appendChild(welcomeMessage);
  }
}

render();