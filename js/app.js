// 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea 
// y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la 
// lista debe poder ser eliminado con un botón creado para ese fin.

const formulario = document.querySelector('form');
const listaTareas = document.querySelector('ul');
formulario.addEventListener('submit',agregarTarea);

function agregarTarea(e){
    e.preventDefault();
    const tarea = document.querySelector('input').value;
    let filaTarea = document.createElement('li');
    filaTarea.innerHTML = tarea;
    filaTarea.className = 'bg-white m-1 p-1 list-group-item';
    let boton = document.createElement('button');
    boton.innerHTML = 'Eliminar';
    boton.className = 'btn btn-success mx-5';
    filaTarea.appendChild(boton);
    listaTareas.appendChild(filaTarea);
    boton.addEventListener('click',()=>{filaTarea.remove();});
}



