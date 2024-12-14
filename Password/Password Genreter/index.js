let passwordBox = document.getElementById("password")
let length = 12
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let symbol = "!@#$%^&*(){}[]|\/><-=~"


let allChars = upperCase + lowerCase + number + symbol

function genretePassword(){
    let password = ''
 password += upperCase[Math.floor(Math.random() * upperCase.length)]
 password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
 password += number[Math.floor(Math.random() * number.length)]
 password += symbol[Math.floor(Math.random() * symbol.length)]

 while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)]
 }
 passwordBox.value = password
}

function removePassword(){
    let remove = ''
   remove = passwordBox.value = remove
}


// let upperCas = Math.floor( Math.random() * upperCase)