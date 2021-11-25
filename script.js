let segundo = 0;
let minuto = 0;
let hora = 0;
let milesimos = 1000;
let cronometro;

function iniciar(){
    cronometro = setInterval( () => {timer();}, milesimos)
}

function pausar(){
    clearInterval(cronometro);
}

function parar(){
    clearInterval(cronometro);
    segundo = 0;
    minuto = 0;
    hora = 0;
    let formatar = "00:00:00"
    document.getElementById('counter').innerText = formatar;
}

function timer(){
    segundo++;
    if(segundo == 60){
        segundo = 0;
        minuto++;
        
        if(minuto == 60){
            minuto = 0;
            hora++;
        }
    }

    let organizar = (hora < 10 ? '0' + hora : hora) + (minuto < 10 ? ':0' + minuto : ':' + minuto) + (segundo < 10 ? ':0' + segundo : ':' + segundo)  
    document.getElementById('counter').innerText = organizar;
}
 