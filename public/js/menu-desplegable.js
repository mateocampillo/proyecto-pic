window.addEventListener('load', function() {

    //activar menu desplegable

    let boton = this.document.querySelector('.boton-menu');
    let menu = this.document.querySelector('.menu-desplegable-mobile');

    boton.addEventListener('click', function(e) {
        if(menu.classList.contains('clase-transicion-entrada')){
            menu.classList.add('clase-transicion-salida')
            menu.classList.remove('clase-transicion-entrada')
        } else {
            menu.classList.add('clase-transicion-entrada')
            menu.classList.remove('clase-transicion-salida')
        }
    })
})