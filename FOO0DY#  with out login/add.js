// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCDajRe6q98Of6b7sNcKbpMU-88ube3gcg",
    authDomain: "finalproject-93617.firebaseapp.com",
    projectId: "finalproject-93617",
    storageBucket: "finalproject-93617.appspot.com",
    messagingSenderId: "429854078677",
    appId: "1:429854078677:web:a689aae81cf25bcd8b945c"
  }; 
      // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
     fullname= document.getElementById('fullname').value;
     comfirmpassword= document.getElementById('comfirmpassword').value;
     birthday= document.getElementById('birthday').value;
     phone= document.getElementById('phone').value; 

     if(valdition_field(fullname)==false||valdition_field(birthday)==false||valdition_field(phone)==false){
      alert('one or more fields is Outta Line')
      return
     }
     if(valdition_email(email.value)==false || valdition_password(password.value)==false){
      alert('Email and Password is Outta Line')
      return
      //don't run the code 

    }
  

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
    window.location.href="F:/Foooody%23/FOO0DY%23/index1.html";
  }




  //signIN function
  function  signIn(){
    var emaill = document.getElementById("emaill");
    var passwordd = document.getElementById("passwordd");
    if(valdition_email(emaill.value)==false || valdition_password(passwordd.value)==false){
      alert('Email and Password is Outta Line')
      return
      //don't run the code 
    } 
    const promise = auth.signInWithEmailAndPassword(emaill.value,passwordd.value);
    if(promise.emaill==true||promise.passwordd==true){

     window.location.href="F:/Foooody%23/FOO0DY%23/index1.html";

    }else if(promise.emaill==false||promise.passwordd==false){
    
      promise.catch(e=>alert(e.message));
    }
    // else{
    //   window.location.href="E:/Foooody%23/FOO0DY%23/index1.html";

    // }

  //   else{
  //   promise.catch(e=>alert(e.message));
  // }
 // window.location.href="E:/Foooody%23/FOO0DY%23/index1.html";

    
     

    
  }


  //signOut
  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
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


