password = document.getElementById('password')
confirmPassword = document.getElementById('confirm_password')

var check = function() {
    if (password.value == "" || confirmPassword.value =="") {
        document.getElementById("message").textContent = ""
    } else if(password.value == confirmPassword.value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = 'Passwords match';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent = '*Passwords do not match';
      password.style.border = "2px solid red";
      confirmPassword.style.border = "2px solid red";
    }
}

