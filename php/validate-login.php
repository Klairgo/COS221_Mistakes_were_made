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
    $checkUser = "Select * from users where user_email='$email'";
    $result = mysqli_query($conn, $checkUser);
    $checkIn = mysqli_num_rows($result);

    //if($checkUser == 'u21489549@tuks.co.za' || $checkUser == 'jake.mileham@gmail.com' || $checkUser == 'cadenjared4@gmail.com' || $checkUser == 'keithashcraft02@gmail.com' || $checkUser === 'u21555258@tuks.co.za'){//need to insert emails here
    //    $admin = true;
    //}
    if ($checkIn != 0) {
        $row = $result->fetch_assoc();
        if($row["user_type"] == "admin"){
            $admin = true;
        }
        else{
            $admin = false;
        }
        $salt = $email;
        $saltedPass = $salt . $pass . $salt;
        $hashPass = hash('sha256', $saltedPass);
        $passPrepare = $conn->prepare("Select user_password from users where user_email='$email'");
        $passPrepare->execute();
        $resultPass = $passPrepare->get_result();
        $finalPass = $resultPass->fetch_assoc();
        if ($hashPass ==  $finalPass["user_password"] && $admin == true) {
            setcookie("logged" , "true");
            setCookie("admin" , "true");
            return validate_response(true, "Password match");
        } 
        else if($hashPass ==  $finalPass["user_password"] && $admin == false){
            setcookie("logged" , "true");
            setcookie("admin" , "false");
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
function console_log($data, $add_script_tags = false) {
    $command = 'console.log('. json_encode($data, JSON_HEX_TAG).');';
    if ($add_script_tags) {
        $command = '<script>'. $command . '</script>';
    }
    echo $command;
}
?>

