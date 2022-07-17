window.onload = () => {

    function liberarBebidas(listaDeConvidados) {
        return listaDeConvidados.map((convidado) => {
            if (convidado.idade > 17) {
                convidado.openBar = true
            } else {
                convidado.openBar = false
            }
            return convidado
            
        } )

    }

    function separarCamarote(listaDeConvidados) {
        var listaFiltrada = listaDeConvidados.filter((convidado) => convidado.setor === "Camarote")
        return listaFiltrada
    }
    function separarPista(listaDeConvidados) {
        var listaFiltrada = listaDeConvidados.filter((convidado) => convidado.setor === "Pista")
        return listaFiltrada
    }
    function separarArquibancada(listaDeConvidados) {
        var listaFiltrada = listaDeConvidados.filter((convidado) => convidado.setor === "Arquibancada")
        return listaFiltrada
    }

    var camarote = [
        {
            nome : "José",
            sobrenome : "Almeida",
            setor : "Camarote",
            idade : 50,
        },
        {
            nome : "Paulo",
            sobrenome : "Barros",
            setor : "Camarote",
            idade : 19,
        },
    ]
    var pista = [
        {
            nome : "Carla",
            sobrenome : "Alves",
            setor : "Pista",
            idade : 32,
        },
        {
            nome : "Batista",
            sobrenome : "Antonio",
            setor : "Pista",
            idade : 20,
        },
    ]
    var arquibancada = [
        {
            nome : "João",
            sobrenome : "Nunes",
            setor : "Arquibancada",
            idade : 42,
        },
        {
            nome : "Roberta",
            sobrenome : "Maria",
            setor : "Arquibancada",
            idade : 18
        },

    ]

    var listaDeConvidados = camarote

    var convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados)

    var listaCamarote = separarCamarote(convidadosComBebidasProcessada)
    var listaPista = separarPista(convidadosComBebidasProcessada)
    var listaArquibancada = separarArquibancada(convidadosComBebidasProcessada)

    console.log("lista Camarote:", listaCamarote)
    console.log("lista Pista:", listaPista)
    console.log("lista Arquibancada:", listaArquibancada)


}