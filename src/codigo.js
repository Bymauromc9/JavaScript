// Cofla 1

/* Problema A:
*
*
* 3 chicos:
*
*
*
* Precio helados:
* Palito de helado de agua: 0.6$
* Palito de helado de crema: 1$
* Bombón helado marca heladix: 1.6$
* Bombón helado marca heladovich: 1.7$
* Bombón helado marca helardo: 1.8$
* Botecito de helado con confites:2.9$
* Bote de 1/4 KG : 2.9$
*
*  Soluciones:
*   - Pedirles que ingresen el monto que tienen y mostrarles el helado
*   - Si hay 2 o mas con el mismo precio , mostrar ambos
*  - Cofla quiere saber cuanto es el vuelto
*
* */
// Precio helados


let dineroCofla=prompt("Introduce la cantidad de dinero de cofla");

if(dineroCofla>=0.6 && dineroCofla<1){
  alert("Helado de agua comprado con exito")
}
else if(dineroCofla>=1&&dineroCofla<1.6){
  alert("Helado de crema comprado con exito")
}
else if(dineroCofla>=1.6&& dineroCofla<1.7){
  alert("Helado de heladix comprado con exito")
}
else if(dineroCofla>=1.7 && dineroCofla<1.8){
  alert("Helado de heladovich comprado con exito")
}
else if(dineroCofla>=1.8 && dineroCofla<2.9){
  alert("Helado de confites comprado con exito")
}



/*
* Problema B:
* Sin techo compra boleto de loteria:
* - Si le alcanza para comprar 1, compra 1
* - Si le alcanza para comprar 2, compra2
* - Si le alcanza para comprar 3 y le sobra, regala las vueltas
* - Debe mostrar que compro y las vueltas
* */