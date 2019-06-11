function validation()
 {
    var hascheck=false,fgen=false;
    var name = document.forms["signup_form"]["fname"];     
    var lname = document.forms["signup_form"]["lname"];           
    var email = document.forms["signup_form"]["email"];    
    var phone = document.forms["signup_form"]["pnumber"];  
    var country =  document.forms["signup_form"]["country"];  
   // var langg = document.getElementsByName('lang[]'); 
     var langg = document.forms['signup_form']['langg[]'];
    var gender = document.forms["signup_form"]["gender"];  
    //var tarea = document.getElementById("textarea").value;
    // var tarea = document.forms['signup_form']['tarea'];
     //var tarea = document.forms["signup_form"]["tarea"];  
     //var x=document.getElementById("hid");
    //alert(tarea);
   document.getElementById('fname_err').innerHTML="";
   document.getElementById('lname_err').innerHTML="";
   document.getElementById('pnumber_err').innerHTML="";
   document.getElementById('email_err').innerHTML="";
   document.getElementById('gender_err').innerHTML="";
   document.getElementById('lang_err').innerHTML="";
   document.getElementById('select_err').innerHTML="";
    if (name.value == "")                                  
    { 
       document.getElementById('fname_err').innerHTML="Please enter your Firstname";
        name.focus(); 
        return false; 
    } 
    else if (lname.value == "")                                  
    { 
       document.getElementById('lname_err').innerHTML="Please enter your Lastname";
        lname.focus(); 
        return false; 
    } 
    else  if (phone.value == "")                           
    { 
       document.getElementById('pnumber_err').innerHTML="Please enter your telephone number"; 
        phone.focus(); 
        return false; 
    }

    else if (email.value == "")                                   
    { 
       // alert("Please enter a valid e-mail address.");
        document.getElementById('email_err').innerHTML="Please enter your e-mail address"; 
        email.focus(); 
        return false; 
    } 
  

    else if (gender.value=="")                               
    { 
      for(var j=0;i<gender.length;j++)
    {
      if(gender[j].checked)
      {
        fgen=true;
        break;
      }
    }
    if(fgen==false)
    {
      //alert("please select gender");
    document.getElementById('gender_err').innerHTML="Please select your gender";
        //gender.focus();
      return false;
    }
        }
    else if(langg.value=="")
    {
      for(var i=0;i<langg.length;i++)
    {
      if(langg[i].checked)
      {
        hascheck=true;
        break;
      }
    }
    if(hascheck==false)
    {
    document.getElementById('lang_err').innerHTML="Please select your Language";
      //alert("please select language");
      return false;
    }
    
    else if(country.value=="")                  
    { 
        //alert("Please select your country."); 
        document.getElementById('select_err').innerHTML="Please select your country";
        country.focus(); 
        return false; 
    }    

    } 
   
    else{
      alert("Sucess");
    }
  

}
