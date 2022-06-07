<?php

include_once "config.php";
$conn = openCon();
function validate_response($success, $message = ""){
     $encode = [
          "success" => $success,
          "message" => $message
     ];
     return $encode;
}


function validate($fname, $lname, $email, $password, $conf_password){
    global $conn;
    $name_pat = '/[ `!,.<>@#$%^()_+\-&*=\[\]{};\':\"\\|\/?~]/';
    $pass_pat = "/^(?=\S{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/";

    if(empty($fname) || empty($lname) || empty($email) || empty($password) || empty($conf_password)){
        return validate_response(false, "Please enter all the fields");
    }
    if(preg_match($name_pat, $fname)){
        return validate_response(false, "Invalid name");
    }
    if(preg_match($name_pat, $lname)){
        return validate_response(false, "Invalid surname");
    }
    if(filter_var($email, FILTER_VALIDATE_EMAIL) == false){
        return validate_response(false, "Invalid email");
    }
    if(!preg_match($pass_pat, $password)){
        return validate_response(false, "Invalid password");
    }
    if($password != $conf_password){
        return validate_response(false, "Passwords does not match");
    }
    if($email == "u21489549@tuks.co.za"){
        $role = "admin";
    } 
    else{
        $role = "normal";
    }

    if($conn->connect_error){
        return validate_response(false, "Connection Failure: ".$conn->connect_error);
    }
    else{
        $salt = $email;
        $saltPass = $salt + $password + $salt;
        $password_hashed = password_hash($saltPass, PASSWORD_ARGON2ID);
        //$password_hashed = password_hash($new_pass, PASSWORD_DEFAULT);

        $query = "INSERT INTO users (user_type, user_name, user_surname, user_email, user_password) VALUES ('$role', '$fname','$lname', '$email', '$password_hashed')";


        if($conn->query($query) === true){
            $conn->close();
            return validate_response(true, "Success sql:".$email);
        }
        else{
            $conn->close();
            return validate_response(false, $conn->error);
        }
    }
    
}




?>