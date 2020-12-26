// Test the password on login site, if it is less than 6 characters, give
//user error so they will type a stronger password
function formValidation(){
    var password = document.form.password.value;
    if(password.length <6){
        alert('Password must be at least 6 characters long.');
        document.forms.password.focus();
        return false;
    }
    return true;
}