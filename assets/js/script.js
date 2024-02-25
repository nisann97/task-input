"use strict";

let firstName = document.querySelector(".first-name");
let btn = document.querySelector(".submit");
let result = document.querySelector(".result")

let lastName = document.querySelector(".last-name")

btn.addEventListener("click", function () {

    let firstValue =  firstName.value;

    let lastValue = lastName.value;

    if(firstValue.trim() == "" || lastValue.trim() == ""){
         document.querySelector(".error").classList.remove("d-none");
        return;
    }else{
        document.querySelector(".error").classList.add("d-none")
    }

   let newDiv = document.createElement("div");
    newDiv.innerHTML = "<p>First Name  " + firstValue + "</p> <p>LastName " + lastValue + "</p>"
    result.appendChild(newDiv);
    firstName.value = "";
    lastName.value = "";
})