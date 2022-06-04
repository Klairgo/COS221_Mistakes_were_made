<?php
define("HOST", "");
define("USER", "");
define("PASS", "");
define ("DB", "");
function openCon(){
    $conn = new mysqli(HOST, USER, PASS, DB) or die("Connect failed: %5\n". $conn ->error);    
    return $conn;
}
function closeCon($conn){
    $conn->close();
}
?>