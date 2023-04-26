const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')

var check = function() {
    if (password.value == "" || confirmPassword.value =="") {
        document.getElementById("message").textContent = ""
        password.style.border = "0.5px solid gray";
        confirmPassword.style.border = "0.5px solid gray";
    } else if(password.value == confirmPassword.value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = 'Passwords match';
      password.style.border = "0.5px solid gray";
      confirmPassword.style.border = "0.5px solid gray";
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent = '*Passwords do not match';
      password.style.border = "2px solid red";
      confirmPassword.style.border = "2px solid red";
    }
}

