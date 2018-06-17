let input = document.querySelectorAll('input, textarea');
let form = document.getElementsByTagName('form')[0];

let nameField = document.querySelector('input[name="name"]');
let emailField = document.querySelector('input[name="email"]');
let commentField = document.querySelector('textarea[name="message"]');

let nameError = document.getElementById('error-name');
let emailError = document.getElementById('error-email');
let messageError = document.getElementById('error-message');

let submitButton = document.getElementById('btn-submit');

function validateEmail(str){
    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    return re.test(str);
}

submitButton.addEventListener('click', function(){
    let errorCount = 0;
    
    if(nameField.value === ''){
        nameError.style.display = 'block';
        errorCount++;
    }else{
        nameError.style.display = 'none';
    }

    if(!validateEmail(emailField.value)){
        emailError.style.display = 'block';
        errorCount++;
    }else{
        emailError.style.display = 'none';
    }

    if(commentField.value === ''){
        messageError.style.display = 'block';
        errorCount++;
    }else{
        messageError.style.display = 'none';
    }
    
    if(!errorCount) form.submit();
});