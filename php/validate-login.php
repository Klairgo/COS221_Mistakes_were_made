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

function val($email, $pass)
{
    global $conn;
    $admin = false;
    $checkUser = "Select * from sign_up where email='$email'";
    $result = mysqli_query($conn, $checkUser);
    $checkIn = mysqli_num_rows($result);
    setcookie("admin" , "false");

    if($checkUser = 'u21489549@tuks.co.za' || $checkUser= ""){//need to insert emails here
        $admin = true;
        setCookie("admin" , "true");
    }
    if ($checkIn != 0) {
        $salt = "Select salt from account where email='$email'";
        $resultSalt = mysqli_query($conn, $salt);
        $row = mysqli_fetch_assoc($resultSalt);
        $salted = $row['salt'];
        $saltedPass = $salted . $pass;
        $hashPass = hash('sha256',$saltedPass);
        $pass = "Select password from account where email='$email";
        $resultPass = mysqli_query($conn, $pass);

        if ($hashPass ==  $resultPass->fetch_assoc()["password"] && $admin == true) {
            return validate_response(true, "Password match");
            } else if($hashPass ==  $resultPass->fetch_assoc()["password"] && $admin == false){
            return validate_response(true, "Password match");
        }
        else {
            return validate_response(false, "Password does not match");
        }
    } else {
        return validate_response(false, "User does not exist");
    }
    return 0;
}

