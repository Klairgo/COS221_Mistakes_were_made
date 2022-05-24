<?php
include "validate-login.php";

function response($success, $message = ""){
     header("HTTP/1.1 200 OK");
     header("Content-Type: application/json");

     echo json_encode([
          "success" => $success,
          "message" => $message
     ]);
}

if(isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["conf_password"])){
     
     
     $valid = val($_POST["email"], $_POST["password"]);
     if($valid.success){
          response(true, $valid["message"]);
     }
     else{
          response(false, $valid["message"]);
     }
}
else{
     header("HTTP/1.1 400 Bad Request");
}



?>