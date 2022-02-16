const input = document.getElementById("input");
const btnTodo = document.getElementById("btn-todo");
const containerTodo = document.querySelector(".container-todo");
let id = 1;

function addTodo() {
    const divTodo = document.createElement("div");
    const divContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafo = document.createElement("p");
    const divBoton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");

    parrafo.innerHTML = input.value;
    divTodo.classList.add("container-list");
    divContainer.classList.add("container-list-1");
    checkbox.classList.add("casilla");
    checkbox.setAttribute("type", "checkbox");
    parrafo.classList.add("actividad");
    divBoton.classList.add("container-list-btn");
    button.classList.add("btn-eliminar");

    button.setAttribute("id", id++);

    icono.classList.add("fa-solid", "fa-trash-can");

    divTodo.appendChild(divContainer);
    divTodo.appendChild(divBoton);
    divContainer.appendChild(checkbox);
    divContainer.appendChild(parrafo);
    button.appendChild(icono);
    divBoton.appendChild(button);

    containerTodo.appendChild(divTodo);

    input.value = "";

    function removerTodo(id) {
        document.getElementById(id).parentElement.parentElement.remove();
    }

    button.addEventListener("click", () => {
        removerTodo(button.getAttribute("id"));
    });
}

btnTodo.addEventListener("click", () => {
    if(input.value === "" || input.value.trim() === "") {
        window.alert("El campo está vacío");
    } else {
        addTodo();
    }
});