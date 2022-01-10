var birthDateSelector=document.querySelector("#date");
var luckyNumber=document.querySelector("#num");
var luckyButton=document.querySelector("#lucky_btn");
var outputSelector=document.querySelector("#output");

var add=0;


luckyButton.addEventListener("click", function luckyBirthdayCheck(){

    const sum=addDateNumber(birthDateSelector.value);
    
    checkingLucky(sum);
    
} );

function addDateNumber(birthDate)
{
    var birthDate=birthDate.replaceAll("-","");
    for(let i=0;i<birthDate.length;i++)
    {
         add=add+Number(birthDate.charAt(i))
    }
    return add;
}

function checkingLucky(sum)
{
    if(sum % luckyNumber.value===0)
    {
        outputSelector.innerText="Birth Day is Lucky";

    }
    else{
        outputSelector.innerText="Birthdah is not Lucky";
    }
}