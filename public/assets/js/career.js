 var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {

  // email
   var email = document.forms["myform"]["Email"].value;
   
 if(email==""){
 alert("Please enter the E-mail");
 return false;
 }else{
 var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
 var x=re.test(email);
 if(x){
 }else{
 alert("Email id not in correct format");
 return false;
 } 
 }
 // email end
//mob
  var phone = document.forms["myform"]["Mobile"];
  if (phone.value == "") {
            window.alert(
              "Please enter your telephone number.");
            phone.focus();
            return false;
        }

  event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    sendmail();
    return true;
    
  }else{
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }

    

    }

 


  function sendmail(){
    
      var name = $('#Name').val();
      var email1 = $('#Email').val();
      var mobile = $('#Mobile').val();
      var message = $('#Post').val();
      // var file =$('file1').files[0].name;
   
     var filename= document.getElementById('file1').files[0].name;
     
     var file = document.getElementById('file1').files[0];
   var reader = new FileReader();
   reader.readAsBinaryString(file);
   reader.onload = function () {
  var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
   
  var Body='Name: '+name+'<br>Email: '+email1+'<br>Mobile: '+mobile+'<br>Post: '+message;
    
      
  Email.send({
    SecureToken : "3f608d66-7018-4ed1-a97e-fd1dfd5284db",
    To : 'weblinkservices2013@gmail.com',
    From : "weblinkservices2013@gmail.com",
    Subject : message,
    Body : Body,
    Attachments : [
  {
   name : filename,

   data:dataUri
    
  }]

}).then(
        message =>{
          //console.log (message);
          if(message=='OK'){
          alert('Your apllication has been send. Thank you for connecting.');
          }
          else{
            console.error (message);
            console.log('There is error at sending message. ')

            
          }

        }
   );

};
   reader.onerror = function() {
       console.log('there are some problems');
   };
       

}

