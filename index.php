
<!DOCTYPE html>

<html>

<head>
     <script type="text/javascript" >
          function preventBack(){window.history.forward();}
          setTimeout("preventBack()", 0);
          window.onunload=function(){null};
     </script>
     <meta>
     <title>CSGO</title>
     <meta charset="UTF-8" />
     <meta name="author" content="Mistakes_were_made" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </meta>
     <link rel="stylesheet" href="css/hero.css">
     <link rel="stylesheet" href="css/nav.css">
     <link rel="icon" href="css/img/soldier.png">
</head>

<body>

     <section class="hero">

          <div class="hero-content">

               <h1 class="hero-title">
                    Discover the World Of E Sports
               </h1>

               <!-- <h2 class="hero-subtitle">
          
       </h2> -->

               <button type="button" id="log" class="hero-button" onclick="location.href='html/login.html'">
                    Login &raquo;
               </button>
               <button type="button" id="reg" class="hero-button" onclick="location.href='html/signup.html'">
                    Register &raquo;
               </button>

          </div>

     </section>


</body>

</html>