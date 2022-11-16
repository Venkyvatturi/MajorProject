const form = document.getElementById('form');
const username = document.getElementById('username');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidnumbrer= number => {
    const re = /^\d{10}$/;
    return re.test(String(number));
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if(usernameValue.length < 5) {
        setError(username, 'length of name must be more then 5 characters ');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(mobileValue === '') {
        setError(mobile, 'number is required');
    } else if ((mobileValue.length != 10 )&&(isNaN)) {
        setError(mobile, 'number must be  10 digits.')
    } 
    else if(mobileValue==='1234567890')
    {
        setError(mobile, 'Mobile number must start with 6 or 7 or 8 or 9')
    }
    else
    {
        setSuccess(mobile);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    }
     else if(passwordValue==='Password')
        {
            setError(password, 'Password not be password')
        }
      else if(passwordValue===usernameValue)  
      {
        setError(password, 'Password not be username')
      }
     else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    
};
