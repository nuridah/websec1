$(document).ready(function() {
  $("#myform").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      sname : {
        required: true,
        minlength: 3,
        maxlength: 30
      },
      matricno: {
        required: true,
        number: true,
        min: 7,
        max: 7
      },
      Caddress : {
        required: true,
        maxlength: 255
      },
      haddress : {
        required: true,
        maxlength: 255
      },
      email: {
        required: true,
        email: true
      },
      mphone2: {
        required: true,
      },
      hphone2: {
        required: true,
      },
    },
    messages : {
      name: {
        minlength: "Name should be at least 3 characters"
      },
      matricno: {
        required: "Please enter your matricno",
        number: "Please enter your matric as a numerical value"
      },
      Caddress: {
        minlength: "Name should be at least 3 characters"
      },
      haddress: {
        minlength: "Name should be at least 3 characters"
      },
      email: {
        email: "The email should be in the format: abc@gmail.com"
      },
      mphone2: {
        required: "Please enter your mobile number",
        number: "Please enter your matric as a numerical value"
      },
      hphone2: {
        required: "Please enter your home phone number",
        number: "Please enter your matric as a numerical value"
      },
    }
  });
});
