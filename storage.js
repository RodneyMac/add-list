const input = document.getElementById("input");
const btnTodo = document.getElementById("btn-todo");
const containerTodo = document.querySelector(".container-todo");

const guardarTareas = () => {
    const tarea = {
        inputTarea: input.value,
    };

    if(localStorage.getItem("tareas") === null) {
        let arreglo = [];
        arreglo.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(arreglo));
    } else {
        let obtener = JSON.parse(localStorage.getItem("tareas"));
        obtener.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(obtener));
    }
    mostrarTareas();
    input.value = "";
};

const mostrarTareas = () => {
    let tareasObtenidas = JSON.parse(localStorage.getItem("tareas"));
    containerTodo.innerHTML = "";
    for(let i=0; i<tareasObtenidas.length; i++) {
        let input = tareasObtenidas[i].inputTarea;
        containerTodo.innerHTML += `
            <div class="container-list">
                <div class="container-list-1">
                    <input type="checkbox" class="casilla"/>
                    <p class="actividad">${input}</p>
                </div>
                <div class="container-list-btn">
                    <button class="btn-eliminar" onclick="eliminarTarea('${input}')"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        `;
    }
}

const eliminarTarea = (tarea) => {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    for(let i=0; i<tareas.length; i++) {
        if(tarea === tareas[i].inputTarea) {
            tareas.splice(i, 1);
        }
    }

    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
};

btnTodo.addEventListener("click", () => {
    if(input.value === "" || input.value.trim() === "") {
        window.alert("Campo vacío. Ingrese datos");
    } else {
        guardarTareas();
    }
});