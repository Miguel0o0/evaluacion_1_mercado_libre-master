var carritoVisible = false 

if(Document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded,ready')
}
else{
    ready();
}

function ready(){
    var botonesEliminar = document.getElementsByClassName('btn-eliminar');
    for(vari=0; i < botonesEliminar.length;i++){
        var buttom = botonesEliminar[i]
        buttom.addEventListener('click', eliminarItemCarrito)
    }
}

function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}
