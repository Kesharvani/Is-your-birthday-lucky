const birthDateSelector=document.querySelector("#datee");
const luckyNumber=document.querySelector("#num");
const luckyButton=document.querySelector("#lucky_btn");
const outputSelector=document.querySelector("#output");

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
    if(sum===0 || luckyNumber.value==="")
    {
        errorMessage("Something is missing: Please Enter both birthdate and lucky number");

    }
    else
    {
    
    if(sum % luckyNumber.value===0)
    {
        errorMessage("Birth Day is Lucky");

    }
    else{
        errorMessage("Birthdah is not Lucky");
    }
    }
}

function errorMessage(error)
{
    outputSelector.innerText=error;
}