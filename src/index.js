import { Project } from "./create";
import { render } from "./render";
import { Todo } from "./create";

import "./style.css";

const showForm = document.querySelector(".showForm");
const form = document.getElementById("project-form");
const formText = document.getElementById("project-name");
const projectListDiv = document.getElementById("project-list");
const sub = document.querySelector(".submit");
const projects = [];

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
  render(projectListDiv, projects);
});
