let funcionPredeterminada = () =>{
    const formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        let valorPorHora = parseFloat(document.getElementById("valorPorHora").value)

        let interfazHoras = parseFloat(document.getElementById("interfazHoras").value)
        let interfazHTML = parseFloat(document.getElementById("interfazHTML").value)

        let resultado = (valorPorHora * interfazHoras) + (valorPorHora * interfazHTML)

        document.getElementById("valorTotal").value = resultado
    })
}

funcionPredeterminada()