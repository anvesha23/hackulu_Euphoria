$(".btn").click(function(){
  var userChosenSong = $(this).attr("id")
    var audio = new Audio("Sounds/" + userChosenSong + ".mp3");
  audio.play();
});


let nodemailer = require('nodemailer');
let mailOptions = {
      from: '<FROM_EMAIL_ADDRESS>',
      to: '<TO_EMAIL_ADDRESS>',
      subject: 'Email from Node-App: A Test Message!',
      text: 'Some content to send'
};


let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '<FROM_EMAIL_ADDRESS>',
        pass: '<FROM_EMAIL_PASSWORD>'
      }
});

transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});
