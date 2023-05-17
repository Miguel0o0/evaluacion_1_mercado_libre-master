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

    ocultarCarrito();
}


function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }

    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es");

}

function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-item')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100';
        carrito.style.opacity = '0';
        carritoVisible = false;

        var item = document.getElementsByClassName('contenedor-items')[0];
        item.style.width = '100%';
    }
}
