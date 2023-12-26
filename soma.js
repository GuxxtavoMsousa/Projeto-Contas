function soma(){
    let valor1 = parseInt(document.getElementById("number1").value);
    let valor2 = parseInt(document.getElementById("number2").value);
    let resultado = document.getElementById("resultado");


    if(isNaN(valor1) || isNaN(valor2) ){
        alert('Digite algo')
    }else{
        let soma = valor1 + valor2  
        resultado.innerHTML = "Resultado: "+soma

       
    }
   
}

function dividir(){
    let valor1 = parseInt(document.getElementById("dividi1").value);
    let valor2 = parseInt(document.getElementById("dividi2").value);
    let resultado = document.getElementById("resultadoDividir");


    if(isNaN(valor1) || isNaN(valor2) ){
        alert('Digite algo')
    }else{
        let dividir = valor1 / valor2  
        resultado.innerHTML = "Resultado: "+dividir

       
    }
   
}