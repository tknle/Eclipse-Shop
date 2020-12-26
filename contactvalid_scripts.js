function contactValidation(){

    var radios = document.contactform.getElementsByName('specific');
    var checked = false;
  
    for (var i = 0; i < specific.length; i++) {
        if (specific[i].checked) {  
            checked=true;
            break;   
        }
    }
   
    if(!checked){
        alert("Check one of the description");
    }
    return false;
}

function ShowHideDiv() {
    var chkYes = document.getElementById("chkYes");
    var dvtext = document.getElementById("dvtext");
    dvtext.style.display = chkYes.checked ? "block" : "none";
    if(!chkYes.checked){
        alert("Please choose at least one option to describe your problem.")
    }
}