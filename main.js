/*
************ Atualizaçoes ************

#### - Acrescentar botao de reiniciar entradas.
#### - Limite de registro de entradas = 5,
entao apagar o primeiro e adicionar o novo.




*/

let contEl = document.getElementById('count-el');
let count = 0;


let saving = document.querySelector('.previous')
let buttonPressed = 0;

const incre = document.querySelector('.increment-btn');
const decre = document.querySelector('.decrement-btn');
const save = document.querySelector('.save-btn');

incre.addEventListener('click', () => {
    if(contEl.textContent !== '15') {
        count +=1;
        contEl.textContent = count;
    } else {
        alert('The station is full')
    }
});
decre.addEventListener('click', () => {
    if(contEl.textContent !== '0') {
        count -= 1;
        contEl.textContent = count;
    } else {
        alert('The station is empty');
    }
});
function peopleSave() {
    if(buttonPressed === 0) {
        saving.innerHTML += count;
        contEl.innerHTML = '0';
        count = 0
        buttonPressed +=1;
    } else {
        saving.innerHTML += ' - '+ count;
        contEl.innerHTML = '0';
        count = 0
    }
}
save.addEventListener('click',peopleSave);