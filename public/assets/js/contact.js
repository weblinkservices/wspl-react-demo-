function sendmail(){
    
      var name = $('#Name').val();
      var email = $('#Sender').val();
      var subject = $('#Subject').val();
      var message = $('#Message').val();
      // var file =$('file1').files[0].name;
   
      var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
      
      Email.send({
    SecureToken : "3f608d66-7018-4ed1-a97e-fd1dfd5284db",
    To : 'weblinkservices2013@gmail.com',
    From : "weblinkservices2013@gmail.com",
    Subject : message,
    Body : Body,

}).then(
        message =>{
          //console.log (message);
          if(message=='OK'){
          console.log('Your message has been send. Thank you for connecting.');
          }
          else{
            console.error (message);
            console.log('There is error at sending message. ')
            
          }

        }
   );

}
