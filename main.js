var result =document.getElementById("result");
var testing = document.getElementById("alert"); 
 

function calBtn(num){
    result.value +=num;
}

function cal(){
    var output = eval(result.value)
    result.value = output;

}


function even(){
    var num=result.value;
    if(num==""){
        testing .innerHTML="Please Enter A number";

    }
    else if(num%2==0){
        testing .innerHTML="This is a Even Number";
        testing .style.color= "Blue";
    }
    else{
        testing .innerHTML="This is Not an Even Number";
        testing .style.color= "Red";
    }
}

function odd(){
    var num=result.value;
    if(num==""){
        testing .innerHTML="Please Enter A number";

    }
    else if(num%2==1){
        testing .innerHTML="This is a Odd Number";
        testing .style.color= "Blue";
    }
    else{
        testing .innerHTML="This is Not an odd Number";
        testing .style.color= "Red";   
     }
}

function clr(){
    result.value = "";
    testing .innerHTML=" ";

}