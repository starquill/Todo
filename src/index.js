import {Project} from "./create";
import {render} from './render';
import {Todo} from "./create";

import './style.css';

const showForm=document.querySelector(".showForm");
const form=document.getElementById("project-form");
const formText=document.getElementById("project-name");
const projects=[];

showForm.addEventListener("click",()=>{
    form.style.display="flex";
});
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const input=formText.value.trim();
    if(input==='')
        return;
    formText.value='';
    const newProject=new Project(input);
    render(input);
    projects.push(newProject);
});