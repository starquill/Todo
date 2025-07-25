export function renderProjects(container,projects,selectedId) {
  container.innerHTML='';
  for( let i=0;i<projects.length;i++){
    const newDiv= document.createElement('div');
    newDiv.classList.add('project-item');
    if(projects[i].Id===selectedId){
      newDiv.classList.add('active-project');
    }
    newDiv.textContent=projects[i].name;
    container.appendChild(newDiv);
  }
}
