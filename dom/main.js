"use strict"

const createUser = (event) =>{
    event.preventDefault();
    let price = +document.querySelector("#price").value;
    let count = +document.querySelector("#count").value;

    let finalPrice = +price * +count;
    showData(finalPrice);
    
    
    
};
const showData = (data)=>{
    document.querySelector("#result").innerHTML = data;
}

document.querySelector("#productPrice").addEventListener("submit",createUser)