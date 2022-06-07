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
    $checkUser = "Select * from users where user_email='$email'";
    $result = mysqli_query($conn, $checkUser);
    $checkIn = mysqli_num_rows($result);
    setcookie("admin" , "false");

    if($checkUser = 'u21489549@tuks.co.za' || $checkUser = "jake.mileham@gmail.com" || $checkUser = ""){//need to insert emails here
        $admin = true;
    }
    if ($checkIn != 0) {
        $salt = $email;
        $saltedPass = $salt . $pass .$salt;
        $hashPass = hash('sha256',$saltedPass);
        $pass = "Select password from users where email='$email";
        $resultPass = mysqli_query($conn, $pass);

        if ($hashPass ==  $resultPass->fetch_assoc()["password"] && $admin == true) {
            setcookie("logged_in" , "true");
            setCookie("admin" , "true");
            return validate_response(true, "Password match");
        } 
        else if($hashPass ==  $resultPass->fetch_assoc()["password"] && $admin == false){
            setcookie("logged" , "true");
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

