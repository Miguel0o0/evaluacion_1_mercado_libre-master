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

    actualizarTotalCarrito();
}

function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('carrito') [0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito.item');
    var total = 0;

    for(var i=0; carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        console.log(precioElemento);
    }

    var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
    console.log(precio);
    var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
    var cantidad = cantidadItem.value;
    console.log(cantidad);
}
