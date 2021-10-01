var btncheck = document.querySelector("#check-btn");
var inputluckyno = document.querySelector("#luckyno");
var birthdayinput = document.querySelector("#date");

function luckybirthday(birthdayipt, luckyno)
{
    console.log(birthdayipt, luckyno)
}

var temp1 = birthdayinput.value;
var temp2 = inputluckyno.value;
btncheck.addEventListener("click", console.log(temp1 , temp2));

;