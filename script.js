function compute()
{
    
    var p = document.getElementById("principal").value;
    var r= document.getElementById("rate").value;
    var t= document.getElementById("years").value;
    var interest=(p*t*r)/100;
    var year = new Date().getFullYear() + parseInt(t);
    
    if(p==""){
        alert("Please enter principal amount");
        p.focus();
        return false;
    }
    if (p==0 || p < 0){
        alert("Please enter a positive number");
        p.focus();
        return false;
    }
    
     let amount = parseInt(p)+parseInt(interest);
    document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

}

function updateRate()
{
    var rateval= document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
