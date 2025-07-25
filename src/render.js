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
