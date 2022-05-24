<?php

function val($letin)
{
    require_once('config.php');
    $email = $_POST["email"];
    $pass = $_POST["pass"];

    $checkUser = "Select * from Sign_up where email='$email'";
    $result = mysqli_query($conn, $checkUser);
    $checkIn = mysqli_num_rows($result);

    if ($checkIn != 0) {
        $salt = "Select salt from Sign_up where email='$email'";
        $resultSalt = mysqli_query($conn, $salt);
        $row = mysqli_fetch_assoc($resultSalt);
        $salted = $row['salt'];
        $saltedPass = $pass . $salted;
        $hashPass = hash('sha256',$saltedPass);

        if ($hashPass ==  $resultPass->fetch_assoc()["password"]) {
            echo '<script type="text/JavaScript">
                    localStorage.setItem("LoggedIn", 1);';
            echo 'You are logged in!<br>';
            echo "<a href='index.php'>Go Back</a>";
        } else {
            return false;
        }
    } else {
        echo '<script>alert("This email is not valid!") </script>';
        return false;
    }
    return ($letin);
}

if (isset($_POST["email"])) {
    $letin = 1;
    $lol = val($letin);
} else {
    $letin = 1;
    $lol = 0;
}
