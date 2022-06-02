<?php
define("HOST", "wheatley.cs.up.ac.za");
define("USER", "u21473103");
define("PASS", "IHEDQVNUMXNLVVTZZUOCV4UPQL2N7LIN");
define ("DB", "CSGO_stats");
function openCon(){
    $conn = new mysqli(HOST, USER, PASS, DB) or die("Conne5ct failed: %5\n". $conn ->error);    
    return $conn;
}
function closeCon($conn){
    $conn->close();
}
?>