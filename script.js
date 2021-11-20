//Select DOM
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let first = document.querySelector('.first');

let cont = 0;

//Events
next.addEventListener('click', imgNext);
prev.addEventListener('click', imgPrev);

//Functions
function imgNext(){
    
    cont += 20;

    first.style.marginLeft = `-${cont}%`;

    if(cont > 80){
        cont = 0
        first.style.marginLeft = `-${cont}%`;
    }
    
}

function imgPrev(){

    if(cont === 0){
        cont = 0;
    }else{
        cont -= 20;
        first.style.marginLeft = `-${cont}%`;
    }

}