function element(id){
    return document.getElementById(id);
}

function paramaterize(data){
    var result = [];
    for(var d in data){
        result.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]))
    }
    console.log(result.join("&"));
    return result.join("&");
}

function show(id){
    element(id).style.display = "";
}

function hide(id){
    element(id).style.display = "none";
}


function ajax(data, callback){

    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            var json = JSON.parse(req.responseText);
            callback(json);
        }
    };

    req.open("POST", "php/login.php", true);

    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    req.send(paramaterize(data));
}

function showregister(){
    show("signup_box");
    hide("error");
    hide("succs");
}

function message(data){
    element("error_mes").innerHTML = data;
}


function signup(){
    var email = element("email");
    var password = element("password");
    let uemail = val_email(email),
        upassword = val_password(password);

    let valid  = uemail && upassword;


    if(valid){

        ajax(
            {
                "email": email.value,
                "password" : password.value,
            },
            function(data){
                if(data.success){
                    hide("signup_box");
                    show("succs");
                }
                else{
                    show("error")
                    hide("signup_box");
                    hide("succs");
                }
                message(data.message);
            }
        );
    }
}


/*
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let uname = val_name(),
        usurname = val_surname(),
        uemail = val_email(),
        upassword = val_password(),
        uconf_password = val_confirm_password();

    let valid  = uname && usurname &&
                uemail && upassword &&
                uconf_password;
                
    if(valid){
        this.submit();
    }
});
*/

const isEmpty = input => input === "" ? true : false;

const check_size = (length, min, max) => length >= min && length <= max ? true : false;

const check_email = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return reg.test(email);
};

const check_pass = (pass) => {
    const reg = new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    return reg.test(pass);
}


const showError = (input, message) => {
    const parent = input.parentElement;


    $(parent).removeClass("success");
    $(parent).addClass("error");

    const sml = parent.querySelector("small");
    $(sml).text(message);

}

const showSuccess = (input) => {

    const parent = input.parentElement;

    $(parent).removeClass("error");
    $(parent).addClass("success");

    const sml = parent.querySelector("small")
    $(sml).text("");
}


const val_email = (vemail) => {
    let valid = false;
    const email = vemail.value.trim();

    if(isEmpty(email)){
        showError(vemail, "Please enter your email");
    }
    else if(!check_email(email)){
        showError(vemail, "Please enter a valid email");

    }
    else{
        showSuccess(vemail);
        valid = true;
    }

    return valid;
}

const val_password = (vpassword) => {
    let valid = false;
    const password = vpassword.value.trim();

    if(isEmpty(password)){
        showError(vpassword, "Please enter a password");
    }
    else if(!check_pass(password)){
        showError(vpassword, "Please enter a valid password. Paswword must consist of at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol. Password has to be atleast 8 characters long.");
    }
    else{
        showSuccess(vpassword);
        valid = true;
    }


    return valid;
}
