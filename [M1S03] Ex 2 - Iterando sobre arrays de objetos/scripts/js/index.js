window.onload = () => {

    var listaConvidados = [
        { nome: "José", sobrenome: "Carlos" },
        { nome: "Alessandro", sobrenome: "Viana" },
        { nome: "Paula", sobrenome: "Souza" },
        { nome: "Cristian", sobrenome: "Schimit" },
        { nome: "Beatriz", sobrenome: "Viana" },
        { nome: "Fernanda", sobrenome: "Silveira" },
        { nome: "Cláudia", sobrenome: "Torres" },
        { nome: "Augusto", sobrenome: "Cesar" },
        { nome: "Noemi", sobrenome: "Nakamura" },
        { nome: "Pedro", sobrenome: "Lobo" },
    ];

    listaConvidados.forEach(convidado => {

        var lista = document.getElementById("ul-lista-convidados")

        var li = document.createElement("li")
        var nomeConvidado = document.createTextNode(`${convidado.nome} ${convidado.sobrenome}`);
        li.appendChild(nomeConvidado)
        lista.appendChild(li)
        
    });
}