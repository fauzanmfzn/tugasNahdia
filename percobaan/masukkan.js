const valueSaran = document.getElementById("inputmasukan");
const valueFile = document.getElementById("formFile");

function clickButton(){
    if (valueSaran.value && valueFile.value) {
        window.location.href = "kitacoba.html";
        console.log("klik button");
    } 
}