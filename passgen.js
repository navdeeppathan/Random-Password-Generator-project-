const passWord=document.getElementById("Password");
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const specialCase="!@#$%^&*()_~}{|[]></-=";

const allChar=upperCase+lowerCase+number+specialCase;

function creatPassword(){
    let Password='';
    Password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    Password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password +=number[Math.floor(Math.random()*number.length)];
    Password +=specialCase[Math.floor(Math.random()*specialCase.length)];

    while(length>Password.length){
        Password +=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passWord.value=Password;
}

function copyPass(){
    passWord.select();
    document.execCommand("copy");
}