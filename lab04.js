function Change(){
    let tableOne = document.querySelector('.one');
    let tableTwo = document.querySelector('.two');
    if(tableTwo.classList.contains('hidden')){
        tableOne.classList.add('hidden');
        tableTwo.classList.remove('hidden');
    }
    else if(tableOne.classList.contains('hidden')){
        tableTwo.classList.add('hidden');
        tableOne.classList.remove('hidden');
    }
}

const changeColor = document.querySelector('.one');
changeColor.addEventListener("click", Change);

const changeColor2 = document.querySelector('.two');
changeColor2.addEventListener("click", Change);
