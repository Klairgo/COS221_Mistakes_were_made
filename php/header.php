<?php
$state ="to";
?>
<!DOCTYPE html>

<html>

<head>
<meta>
<title>Header</title>
  <meta charset="UTF-8" />
  <meta name="author" content="Mistakes were made" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</meta>
<link rel="stylesheet" href="../css/nav.css">
<script src="../js/land.js"></script>
<script src ="../js/logout.js"></script>
</head>
  <body>
  <!--nav bar-->
  <div class="topnav">
    <a id="tor"  onclick = "landonme('to')">Tournaments</a>
    <a id="player"  onclick ="landonme('p')">Players</a>  
    <a id="team"  onclick ="landonme('te')">Teams</a>      
    <a id="logout" href="../index.php" onclick ="removeStorage()">Logout</a>
    <a id ="admin" href="admin.php">Admin</a>
  </div>
</body>



</html>


