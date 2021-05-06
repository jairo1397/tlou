// document.addEventListener('DOMContentLoaded', function() {
//     scrollNav();
// });

// function scrollNav() {
//     const enlaces = document.querySelectorAll('nav ul a');

//     enlaces.forEach(function(enlaces) {
//         enlaces.addEventListener('click', function(e) {
//             e.preventDefault();

//             const seccion = document.querySelector(e.target.atrributes.href.value);

//             seccion.scrllIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     })

// }
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;
        //añadir la funcion de mostrar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LIST');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {


    const id = parseInt(e.target.dataset.imagenId);
    const imagen = document.createElement('IMG');
    imagen.src = imagen.src = `build/img/thumb/${id}.webp`;
    console.log(imagen);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('zoom');

    //boton para cerrar la imagene
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //cuando se da click, cerrar la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //cuando se presiona se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    //mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body')
}