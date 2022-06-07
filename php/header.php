<?php
if(isset($_COOKIE["admin"])){
echo '<!DOCTYPE html>

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
    <a id="tor"  onclick = "landonme(\'to\',\'1\')">Tournaments</a>
    <a id="player"  onclick ="landonme(\'p\',\'1\')">Players</a>  
    <a id="team"  onclick ="landonme(\'te\',\'1\')">Teams</a>      
    <a id="logout" href="../index.php" onclick ="removeStorage()">Logout</a>
    <a id ="admin" href="admin.php">Admin</a>
  </div>
</body>
</html>';
}
else{
echo '<!DOCTYPE html>

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
    <a id="tor"  onclick = "landonme(\'to\',\'1\')">Tournaments</a>
    <a id="player"  onclick ="landonme(\'p\',\'1\')">Players</a>  
    <a id="team"  onclick ="landonme(\'te\',\'1\')">Teams</a>      
    <a id="logout" href="../index.php" onclick ="removeStorage()">Logout</a>
  </div>
</body>



</html>';
}
