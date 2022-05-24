<?php

function validate_response($success, $message = ""){
     $encode = [
          "success" => $success,
          "message" => $message
     ];
     return $encode;
}

function val($email, $pass)
{
    require_once('config.php');

    $checkUser = "Select * from Sign_up where email='$email'";
    $result = mysqli_query($conn, $checkUser);
    $checkIn = mysqli_num_rows($result);

    if ($checkIn != 0) {
        $salt = "Select salt from Sign_up where email='$email'";
        $resultSalt = mysqli_query($conn, $salt);
        $row = mysqli_fetch_assoc($resultSalt);
        $salted = $row['salt'];
        $saltedPass = $salted . $pass;
        $hashPass = hash('sha256',$saltedPass);

        if ($hashPass ==  $resultPass->fetch_assoc()["password"]) {
            return validate_response(true, "Password match");
        } else {
            return validate_response(false, "Password does not match");
        }
    } else {
        return validate_response(false, "User does not exist");
    }
    return 0;
}

