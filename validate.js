
const nameInput = document.querySelector('#nome');
const counter = document.querySelector('.spam');

const nameInput2 = document.querySelector('#nome2');
const counter2 = document.querySelector('.spam2');

  nameInput.addEventListener('input', () => {

    if (nameInput.value.length < 50) {
        counter.innerText = nameInput.value.length;
    } else {
        counter.innerText = 'Max';
        nameInput.value = nameInput.value.substr(0, 50);
    }
}) 

nameInput2.addEventListener('input', () => {

    if (nameInput2.value.length < 50) {
        counter2.innerText = nameInput2.value.length;
    } else {
        counter2.innerText = 'Max';
        nameInput2.value = nameInput2.value.substr(0, 50);
    }
}) 
