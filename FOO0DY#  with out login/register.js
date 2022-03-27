function requst(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
     fullname= document.getElementById('fullname').value;
     comfirmpassword= document.getElementById('comfirmpassword').value;
     areaphone= document.getElementById('areaphone').value;
     phone= document.getElementById('phone').value; 
     direction= document.getElementById('direction').value; 
     category= document.getElementById('category').value; 

     
     if(valdition_field(fullname)==false||valdition_field(areaphone)==false||valdition_field(phone)==false||valdition_field(direction)==false||valdition_field(category)==false ){
      alert('one or more fields is Outta Line')
      return
     }
     if(valdition_email(email.value)==false || valdition_password(password.value)==false){
      alert('Email and Password is Outta Line')
      return
      //don't run the code 

    }
    
     
     window.location.href="RESADMIN/pages/product/addproduct.html";

    }
 
 //valdition
 function valdition_email(email){
    expression= /^[^@]+@\w+(\.\w+)+\w$/;
    if(expression.test(email) == true){
      return true
    }else{
      return false
    }
   }
   function valdition_password(password){
     if (password<=8){
       return false
     }else{
       return true
     }
   }
   function valdition_field(filed){
     if(filed==null){
       return false
     }
     if(filed<=0){
       return false
     }else{
       return true
     }
   }
 