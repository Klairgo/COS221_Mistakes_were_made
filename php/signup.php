<?php
include "validate-signup.php";

function response($success, $message = ""){
     header("HTTP/1.1 200 OK");
     header("Content-Type: application/json");

     echo json_encode([
          "success" => $success,
          "message" => $message
     ]);
}

if(isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["conf_password"])){
     
     
     $valid = validate($_POST["role"], $_POST["fname"], $_POST["lname"], $_POST["password"], $_POST["conf_password"], $_POST["email"]);
     if($valid["success"]){
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