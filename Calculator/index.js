var display= document.getElementById("display");
var currentvalue="";


var calculator=(value)=>{ 
    if(value=="AC"){
        currentvalue="";
        display.value="";
    }
    else if(value=='='){
        currentvalue=display.value;
      display.value=eval(currentvalue);
    }else{
        display.value += value;
         currentvalue =display.value;
    }
}
 function checkingkeyboard(){
    const regexPattern = /^[\d+*\/\-.=\s]+$/;
    const match= regexPattern.test(display.value)
    if(!match ){
        alert("enter only numbers and digits which are used in calculator below")
    }

}