export function render(input){
    const list = document.getElementById("project-list");
    const item = document.createElement("div");
    item.textContent = input;
    list.appendChild(item);
}