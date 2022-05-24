<?php
$email = $password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = input($_POST["email"]);
  $password = input($_POST["pass"]);
}

function input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
<h2>Login</h2>
<form name="form2" method="post" action="validate-loginP4.php">  
  E-mail: <input type="email" oninvalid="alert('Sorry this email is not valid');" name="email" required>
  <br><br>
  Password: <input type="password" name="pass" required>
  <br><br>
  <input type="submit" name="submit" onclick="password(document.form2.pass)" value="Submit">  
</form>
<a href="index.php"><button>Go Back</button></a>

<script type="text/JavaScript">
    function password(value){
      var pas = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})");
      if(value.value.match(pas)){
        return true;
      }
      else{
        alert('This password is not correct!');
        return false;
      }
    }
</script>