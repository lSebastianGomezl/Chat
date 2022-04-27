const enter = document.getElementById('input');
const inicial = document.getElementById('letra');

const leer = document.getElementById('inputText');
const mensaje = document.getElementById('mensaje');

enter.addEventListener('keypress', fuction);
leer.addEventListener('keyup', function2);


function fuction(event){
    console.log(event);
    if(event.key == "Enter"){
        console.log(event);
        inicial.textContent = event.target.value.charAt(0).toUpperCase();
    }
}

function function2(event){
    if(event.keyCode == 13){
        console.log(event);
        mensaje.textContent = event.target.value;
    }
}

function contText(event){
    let maxCaracters = 200;
    let numText = event.value.length;
    let charCount = (maxCaracters - numText);

    if(charCount <= 30){
        document.getElementById("texto").innerHTML = '<p style="color: red;">'+charCount+'</p>';
    }else{
        document.getElementById("texto").textContent = charCount;
        }
    }
 
