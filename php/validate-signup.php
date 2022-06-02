<?php


function validate_response($success, $message = ""){
     $encode = [
          "success" => $success,
          "message" => $message
     ];
     return $encode;
}


function validate($name, $surname, $email, $password, $conf_password){
    include "config.php";
    $name_pat = '/[ `!,.<>@#$%^()_+\-&*=\[\]{};\':\"\\|\/?~]/';
    $pass_pat = "/^(?=\S{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/";

    if(empty($name) || empty($surname) || empty($email) || empty($password) || empty($conf_password)){
        return validate_response(false, "Please enter all the fields");
    }
    if(preg_match($name_pat, $name)){
        return validate_response(false, "Invalid name");
    }
    if(preg_match($name_pat, $surname)){
        return validate_response(false, "Invalid surname");
    }
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        return validate_response(false, "Invalid email");
    }
    if(!preg_match($pass_pat, $password)){
        return validate_response(false, "Invalid password");
    }
    if($password != $conf_password){
        return validate_response(false, "Passwords does not match");
    }

    //$connection = new mysqli("wheatley.cs.up.ac.za", "u21555258", "NVIEV6OIB2JF37YWX4TIXEGJI5RMK36M", "u21555258");
    //$connection = Connectdb::instance();
    

    if($conn->connect_error){
        //die("Connection failure: ". $connection->connect_error);
        return validate_response(false, "Connection Failure: ".$conn->connect_error);
    }
    else{
        $password_hashed = password_hash($password, PASSWORD_DEFAULT);
        $api = bin2hex(random_bytes(20));
        $check_api = "SELECT API_key FROM ACCOUNTS";
        $api_result = $conn->query($check_api);

        //check if api exists
        if($api_result->num_rows > 0){
            do{
                $api_found = false;
                while($row = $api_result->fetch_assoc()){
                    if($row["API_key"] == $api){
                        $api = bin2hex(random_bytes(32));
                        $api_found = true;
                    }
                }
            }
            while($api_found);

        }

        $query = "INSERT INTO ACCOUNTS (name, surname, email, password, API_key) VALUES ('$name', '$surname','$email', '$password_hashed', '$api')";


        if($conn->query($query) === true){
            $conn->close();
            return validate_response(true, "Success sql:".$api);
        }
        else{
            $conn->close();
            return validate_response(false, "Email already exists");
        }
    }
    
}




?>