const hide = document.querySelector("#hide");
const descobrir = document.querySelector("#descobrir");
const botao = document.querySelector("go");
let resposta = document.querySelector("#resposta");
const button = document.querySelector("#send");
let goal;


button.addEventListener("click", enviar);

function enviar() {

    goal = parseInt(hide.value);

    if (goal >= 0 && goal <= 10) {
        hide.value = " ";
        go.disabled = false;
    } else {
        alert("Invalid Number.")
        go.disabled = true;

    }

}


go.addEventListener("click", answer);

function answer() {
    const valor2 = parseInt(descobrir.value);

    


    if (goal === valor2)
        resposta.innerHTML = "Congrats, you dif it!"


    else if (valor2 >= 0 && valor2 <= 10){

        
       resposta.innerHTML = "You suck. Try again." 
    }
    else 
        alert("Invalid Number.")
       
   

 

}