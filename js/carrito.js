var carritoVisible = false 

if(Document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded,ready')
}else{
    ready();
}

function ready(){
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i < botonesEliminarItem.length;i++){
        var buttom = botonesEliminarItem[i]
        buttom.addEventListener('click', eliminarItemCarrito)
    }
}

function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}
