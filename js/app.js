/**  Constructores */
function Seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo= tipo;
}

function UI(){}//Ojeto vacio para la interfaz

/** PROTOTYPES */

//Lenna las opciones de los años
UI.prototype.llenarOpciones=()=>{//Puedo usar arraow function porq no voy a usar el this.
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.querySelector('#year');
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje,tipo)=>{
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('error');
    }
    else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje','mt.10');
    div.textContent = mensaje;
    //Insertar en HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,document.querySelector('#resultado'));
    setTimeout(()=>{
        div.remove();
    },3000);
}

//Instancia UI
const ui = new UI();

/** Event Listeners */
document.addEventListener('DOMContentLoaded',()=>{
    ui.llenarOpciones();
});
eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',contizarSeguro);
}

function contizarSeguro(e){
    e.preventDefault();
    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    //Leer el año seleccionado
    const year = document.querySelector('#year').value;
    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;//Son radio buttons

    if(marca === '' || year === '' || tipo=== ''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error');
        return;
    }
    
    ui.mostrarMensaje('Corizando','exito');
}

