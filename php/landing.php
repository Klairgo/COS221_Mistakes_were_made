<?php


if(isset($_COOKIE["logged_in"])){
echo (file_get_contents("header.php"));
echo '<!DOCTYPE html>

<html>

<head>
     <meta>
     <title>Landing</title>
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
              <p id="do"> Welcome  Please  Choose  What  You  Want  TO  See:</p>
              
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
     <title>Landing</title>
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