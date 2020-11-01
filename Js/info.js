//
//document.getElementById("menu").addEventListener("click", closeSideMenu());
//window.onload=function(){
//    var hideNav = document.getElementById("menu");
//    document.onclick=function(div){
//        if(div.target.id !== "menu"){
//            hideNav.style.display="none";
//        }
//    }
//}

function openSideMenu() {
      
      document.getElementById("menu").style.width = "200px";
     
      }

function closeSideMenu() {
      document.getElementById("menu").style.width = "0";
      }









// Form Validation Start

function validation(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("password").value;
    let confpass = document.getElementById("conf_password").value;
    
    if(name == ""){
        document.getElementById("myname").innerHTML="** Please Enter Your Name";
        return false;
    }
    if(!isNaN(name)){
        document.getElementById("myname").innerHTML="** Please Enter Name as String Value";
        return false;
    }
    
    if(email == ""){
        document.getElementById("myemail").innerHTML="** Please Enter Your Email";
        return false;
    }
    if(email.indexOf("@") <=0){
       document.getElementById("myemail").innerHTML="** @ at invalid position";
        return false; 
    }
    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")) {
       document.getElementById("myemail").innerHTML="** . at invalid position";
        return false; 
    }
    if(phone == ""){
        document.getElementById("myphone").innerHTML="** Please Enter Your Name";
        return false;
    }
     if(isNaN(phone)){
         document.getElementById("myphone").innerHTML="** Please Enter only digits ";
         return false;
     }
     if(phone.length!=10){
        document.getElementById("myphone").innerHTML="** Mobile No must be 10 digits ";
        return false;   
     }
     if(pass == ""){
        document.getElementById("mypass").innerHTML="** Please Enter Password";
        return false;
    }
    if((pass.length <=5) || (pass.length >=20)){
        document.getElementById("mypass").innerHTML="** Password must be between 5 and 20";
        return false;
    }
    
    
   if(confpass == ""){
        document.getElementById("myconfpass").innerHTML="** Please Enter Confirm Password";
        return false;
    }
    if(pass!= confpass){
        document.getElementById("myconfpass").innerHTML="** Password didn't match";
        return false;
    }
}










