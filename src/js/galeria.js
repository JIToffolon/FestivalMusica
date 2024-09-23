document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();

});


function crearGaleria() {

    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('img');
        imagen.src = `src/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;

        imagen.onclick = monstrarImagen;

        const lista = document.createElement('li');
        lista.appendChild(imagen);
        galeria.appendChild(lista);

    }

};


function monstrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    //Generar la Imagen
    const imagen = document.createElement('img');
    imagen.src = `src/img/grande/${id}.jpg`;
    const overlay = document.createElement('div');
    overlay.appendChild(imagen)
    overlay.classList.add('overlay');


    //Boton para cerrar la imagen

    const cerrarImagen = document.createElement('p');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-galeria');
    overlay.appendChild(cerrarImagen);

    //Funcion del Boton

    cerrarImagen.onclick = function () {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

};