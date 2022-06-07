<?php
include_once("headerForAdmin.php");

echo 
'<!DOCTYPE html>

<html>

<head>
     <meta>
     <title>Landing</title>
     <meta charset="UTF-8" />
     <meta name="author" content="Mistakes_were_made" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </meta>
     <link rel="stylesheet" href="../css/hero.css">
     <link rel="stylesheet" href="../css/login.css">
     
</head>

<body>
     <section class="hero">

          <div class="hero-content" id = "main">
               <div id="login" style="display:none;"></div>

               <div id="mess" style="display: none">
                    <h2 id="mess_head" style="text-align: center; margin-top: 30px"></h2>
                    <div id="mess_message">
                         <div id="mess_body" style="font-size: 25px; font-family: Arial"></div>
                    </div>
               </div>
          </div>
     </section>
     


</body>

</html>';

?>