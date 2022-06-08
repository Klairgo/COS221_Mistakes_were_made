<?php


if($_COOKIE["logged"] == "true"  && $_COOKIE["admin"] == "true"){
echo (file_get_contents("adminHeader.php"));
echo '<!DOCTYPE html>

<html>

<head>
     <meta>
     <title>CSGO</title>
     <meta charset="UTF-8" />
     <meta name="author" content="Mistakes_were_made" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </meta>
     <link rel="stylesheet" href="../css/hero.css">
     <link rel="stylesheet" href="../css/layout.css">
     
</head>

<body>
     <section class="hero">

          <div class="hero-content" id="main">
              <p id="do"> Welcome  Please  Choose  What  You  Want  TO  SeE:</p>
              
          </div>

     </section>


</body>

</html>';
}

else if ($_COOKIE["logged"] == "true" && isset($_COOKIE["admin"]) == "false"){
     echo (file_get_contents("header.php"));
echo '<!DOCTYPE html>

<html>

<head>
     <meta>
     <title>CSGO</title>
     <meta charset="UTF-8" />
     <meta name="author" content="Mistakes_were_made" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </meta>
     <link rel="stylesheet" href="../css/hero.css">
     <link rel="stylesheet" href="../css/layout.css">
     
</head>

<body>
     <section class="hero">

          <div class="hero-content" id="main">
              <p id="do"> Welcome  Please  Choose  What  You  Want  TO  SeE:</p>
              
          </div>

     </section>


</body>

</html>';
}
else{
echo '<!DOCTYPE html>

<html>

<head>
     <meta>
     <title>CSGO</title>
     <meta charset="UTF-8" />
     <meta name="author" content="Mistakes_were_made" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </meta>
     <link rel="stylesheet" href="../css/hero.css">
     <link rel="stylesheet" href="../css/layout.css">
     
</head>

<body>
     <section class="hero">

          <div class="hero-content" id="main">
              <p id="123">You are not Logged in</p>
              <a id = "goBack" href = "../index.php" >Go Back</a>
          </div>

     </section>


</body>

</html>';
}
?>