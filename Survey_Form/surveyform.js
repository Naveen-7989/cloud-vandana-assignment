var firstname="";
var lastname="";
var dateofbirth="";
var selectcountry="";
var proffession="";
var eamil="";
var mobilenumber="";
var gender="";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^(?:\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4}|\d{3}[-\s]\d{3}[-\s]\d{4})$/;




var Submitted_details1 =document.getElementById("Submitted_details1");
var Submitted_details2 =document.getElementById("Submitted_details2");
var Submitted_details3 =document.getElementById("Submitted_details3");
var Submitted_details4 =document.getElementById("Submitted_details4");
var Submitted_details5 =document.getElementById("Submitted_details5");
var Submitted_details6 =document.getElementById("Submitted_details6");
var Submitted_details7 =document.getElementById("Submitted_details7");
var Submitted_details8 =document.getElementById("Submitted_details8");






function openCustomModal(event) {
    event.preventDefault();
    

     firstname= document.getElementById("firstname").value;
     lastname= document.getElementById("lastname").value;
     dateofbirth= document.getElementById("dateofbirth").value;
     selectcountry= document.getElementById("selectcountry").value;
     proffession= document.getElementById("proffession").value;
     eamil= document.getElementById("eamil").value;
     mobilenumber= document.getElementById("mobilenumber").value;
     gender = document.querySelector('input[name="choice"]:checked')?.value;

    Submitted_details1.innerHTML="First Name :"+firstname;
    Submitted_details2.innerHTML="Last Name :"+lastname;
    Submitted_details3.innerHTML="Date of Birth:"+dateofbirth;
    Submitted_details4.innerHTML="Country :"+selectcountry;
    Submitted_details5.innerHTML="Proffession :"+proffession;
    Submitted_details6.innerHTML="Email :"+eamil;
    Submitted_details7.innerHTML="Mobile Number :"+mobilenumber;
    Submitted_details8.innerHTML="Gender :"+gender;
            
    if(firstname.trim()===''||lastname.trim()===''||dateofbirth.trim()===''||selectcountry.trim()===''||proffession.trim()===''||eamil.trim()===''||mobilenumber.trim()===''||gender.trim()===''){
        alert(
            "please Fill all the fields"
        )}else if(!emailRegex.test(eamil)){
            alert("enter valid email"); 
       }else if(!phoneRegex.test(mobilenumber)){
        alert("enter valid mobile number"); 
     }else{
        var modal = document.getElementById("custom-modal");
    modal.style.display = "block";
    modal.style.height = "100%";
        
    }
}




function closeCustomModal() {
    var modal = document.getElementById("custom-modal");
    modal.style.height = "0";
    setTimeout(function () {
        modal.style.display = "none";
    }, 500);

    document.getElementById("survey_form").reset();
}
