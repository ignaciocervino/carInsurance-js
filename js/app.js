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

//Instancia UI
const ui = new UI();

/** Event Listeners */
document.addEventListener('DOMContentLoaded',()=>{
    ui.llenarOpciones();
});

