const  colorInput = document.getElementById("colorInput");
const  idInput = document.getElementById("idInput");

console.log(colorInput);
console.log(idInput);

function setCard(){
    const card = document.getElementById(idInput.value)
    card.style.color= colorInput.value;
}

