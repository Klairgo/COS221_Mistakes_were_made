<?php
define("HOST", "wheatley.cs.up.ac.za");
define("USER", "u21473103");
define("PASS", "IHEDQVNUMXNLVVTZZUOCV4UPQL2N7LIN");
define ("DB", "u21473103_221p5");
function openCon(){
    $conn = new mysqli(HOST, USER, PASS, DB) or die("Connect failed: %5\n". $conn ->error);    
    return $conn;
}
function closeCon($conn){
    $conn->close();
}
?>