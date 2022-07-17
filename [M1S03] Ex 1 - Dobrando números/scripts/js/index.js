window.onload = () => {

    var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]

    console.log("Lista Original: ", listaNumeros)

    listaNumeros.forEach((listaNumero, index) => {
        listaNumeros[index] = listaNumero *2
    });

    console.log("Lista Modificada:", listaNumeros)
}