function precioCompleto(precio, impuesto) {
    precioFinal = precio + precio * impuesto;
    return precioFinal;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);