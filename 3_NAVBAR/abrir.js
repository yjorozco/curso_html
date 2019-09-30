function accion(){
    var ancla= document.getElementsByClassName('nav-enlace');

    for (let i = 0; i < ancla.length; i++) { 
        console.log(ancla[i]);
        ancla[i].classList.toggle('desaparece');
        
    }
}