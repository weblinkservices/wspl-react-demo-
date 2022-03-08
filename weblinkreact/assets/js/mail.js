function send(){
      
      Email.send({
    Host : "smtp.google.com",
    Username : "weblinkservices2013@gmail.com",
    Password : "15082013",
    To : 'weblinkservices2013@gmail.com',
    From : "weblinkservices2013@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"

}).then(
  message => alert(message)
);
}