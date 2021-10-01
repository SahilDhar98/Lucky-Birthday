var btnCheck = document.querySelector("#btn-check");
var inputLuckyno = document.querySelector("#luckyno");
var birthdayInput = document.querySelector("#date");
var outputBox = document.querySelector("#output");



function calculateSum(birthDate){
    birthDate = birthDate.replaceAll("-","");
    var sum = 0;
    for(var i=0; i<birthDate.length; i=i+1 ) {
        sum = sum + Number(birthDate[i]);

    }
    return(sum);
}

 btnCheck.addEventListener('click',function checkNumberIsLucky() {
    var sumDate = calculateSum(birthdayInput.value);
    var luckyNo = Number(inputLuckyno.value);
    if (sumDate&&luckyNo){
        if(sumDate%luckyNo === 0){
        
            outputBox.innerText="Your Birthday is Lucky! 🎉 ";
        }
        else
        {    
            outputBox.innerText="Your Birthday is not Lucky! 🤭";
        }
    }
    else{
        outputBox.innerText = "Enter both the fields!";
    }   
 });

