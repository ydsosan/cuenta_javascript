precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio



function suma()
{
parrafo = document.querySelector('.cantidad');
cuenta = Number(parrafo.innerHTML);
cuenta = cuenta + 1;
parrafo.innerHTML = cuenta;
preciofinal = document.querySelector(".valor-total");
preciofinal.innerHTML = cuenta*precio;
}


function resta()

{
    valor = document.querySelector(".cantidad");
    cuenta = Number(valor.innerHTML);
    suma = cuenta - 1;
    valor.innerHTML = suma;
    preciofinal = document.querySelector(".valor-total");
    preciofinal.innerHTML = suma*precio;
}
