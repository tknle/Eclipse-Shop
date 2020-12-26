function formValidation(){
    var num=document.form.cellnum.value.trim();
    
    var allAlpha1 = true;  
    var firstName = document.form.firstName.value.trim();
    firstName = firstName.toUpperCase();

    var allAlpha2 = true;
    var lastName = document.form.lastName.value.trim();
    lastName = lastName.toUpperCase();

    var password = document.form.password.value;

    for(var i=0; i<firstName.length;i++){
        if(firstName.charAt(i) <"A" || firstName.charAt(i) >"Z" ){
            allAlpha1 = false;
        }
    }

    for( i=0; i<lastName.length;i++){
        if(lastName.charAt(i) <"A" || lastName.charAt(i) >"Z"){
            allAlpha2 = false;
        }
    }
    //check if the form for number is only number
    if(parseInt(num) !== num){
        alert('Please enter your cellphone, numbers only');
        document.form.cellnum.focus();
        return false;
    }
    //check if first name and last name is not letter
    else if(!allAlpha1){
        alert('Please enter your first name, all alphabet letters, no space.');
        document.form.firstName.focus();
        return false;
    }
    //check if first name and last name is not letter
    else if(!allAlpha2){
        alert('Please enter your last name, all alphabet letters, no space.');
        document.form.lastName.focus();
        return false;
    }
    //check if password length is less than 6 characters
    else if(password.length <6){
        alert('Password must be at least 6 characters long.');
        document.forms.password.focus();
        return false;
    }
    //the cell number has to be at least 6 digits
    else if(num.length <6){
        alert('Invalid phone number, must be at least 6 digits. Try again.');
        document.form.cellnum.focus();
        return false;
    }

    return true;

}