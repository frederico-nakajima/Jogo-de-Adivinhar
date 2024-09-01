const screen01 = document.querySelector('#screen01');
const screen02 = document.querySelector('#screen02');
const btnScreen01 = document.getElementById('btnScreen01');
const btnScreen02 = document.getElementById('btnScreen02');

let valorRandomico = Math.round(Math.random() * 10)

let tentativa = 1;


function handleTryClick(event){
    event.preventDefault()
    
    const numeroInserido = document.querySelector('input');
    
    if(Number(numeroInserido.value) == valorRandomico){
        
        document.getElementById('screen01').classList.add('hide');
        document.getElementById('screen02').classList.remove('hide');
        
        screen02.querySelector('h2').innerText = `acertou em ${tentativa} tentativas`;
        
    }
    
    numeroInserido.value =""
    tentativa++
    
}

function handleResetClick(){
    
    document.getElementById('screen01').classList.remove('hide');
    document.getElementById('screen02').classList.add('hide');
    tentativa = 1;
    valorRandomico = Math.round(Math.random() * 10)
}


btnScreen01.addEventListener('click',handleTryClick)
btnScreen02.addEventListener('click',handleResetClick)
document.addEventListener('keydown',function(e){
    if(e.key == 'Enter' && screen01.classList.contains('hide')){
        handleResetClick()
    }
})

