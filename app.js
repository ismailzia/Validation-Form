//const 
const name = document.getElementById('name');
const zipCode = document.getElementById('zipCode');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');

//create add evente listenner 
name.addEventListener('blur',valideName);
zipCode.addEventListener('blur',valideZip);
email.addEventListener('blur',valideEmail);
phoneNumber.addEventListener('blur',validPhone);

//function validation name
function valideName(){
  const re = /^[A-Za-z]{2,9}$/;
  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  }else{
    name.classList.remove('is-invalid');
  }
}

//function validatiopn zip code 
function valideZip(){
  const re = /^[A-Za-z1-9]{3,7}$/;
  if(!re.test(zipCode.value)){
    zipCode.classList.add('is-invalid');
  }else{
    zipCode.classList.remove('is-invalid');
  }

}

//function validation Email
function valideEmail(){

  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  }else{
    email.classList.remove('is-invalid');
  }
}

//function validation phone
function validPhone(){

}

//function validation phone
function validPhone(){
  const re = /^[0-9]{8,14}$/
  if(!re.test(phoneNumber.value)){
    phoneNumber.classList.add('is-invalid');
  }else{
    phoneNumber.classList.remove('is-invalid')
  }
}