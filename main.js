const passLength=document.getElementById("passwordLength");
const lengthLabel=document.getElementById("lengthLabel");
const passwordElement= document.getElementById("password");
btnGeneratePassword.addEventListener("click",generatePassword);
copy.addEventListener("click",copyToClipBoard);

const toggleVisibility = document.getElementById("toggleVisibility");
let passwordVisible = true;

function generatePassword() {
  let length=8;
  length=passLength.value;
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password="";
  for (let i=0;i<length;i++) {
      password+= charset[Math.floor(Math.random()*charset.length)];
  }
  passwordElement.value=password;
}

function showValue(value) {
  lengthLabel.textContent="Length:"+value;
}


function copyToClipBoard() {
  passwordElement.select();
  navigator.clipboard.writeText(passwordElement.value);

  var alert = document.getElementById("alert");
  alert.style.display = "block";

  setTimeout(function () {
    alert.style.display = "none";
  }, 1500);
}


toggleVisibility.addEventListener("click", function () {
  if (passwordVisible) {
    passwordElement.type = "password";
    toggleVisibility.innerHTML = '<i class="fa fa-eye"></i>';
  } else {
    passwordElement.type = "text";
    toggleVisibility.innerHTML = '<i class="fa fa-eye-slash"></i>';
  }
  passwordVisible = !passwordVisible;
});
