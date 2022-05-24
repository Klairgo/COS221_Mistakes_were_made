<!DOCTYPE html>

<html>

<head>
     <meta>
     <title>Landing</title>
     <meta charset="UTF-8" />
     <meta name="author" content="Mistakes_were_made" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </meta>
     <link rel="stylesheet" href="css/hero.css">
     <link rel="stylesheet" href="css/nav.css">
</head>

<body>

     <section class="hero">

          <div class="hero-content">

               <h1 class="hero-title">
                    Discover the World Of E Sports
               </h1>

               <!-- <h2 class="hero-subtitle">
          
       </h2> -->

               <button type="button" id="log" class="hero-button" onclick="location.href='tours.html'">
                    Login &raquo;
               </button>
               <button type="button" id="reg" class="hero-button" onclick="location.href='tours.html'">
                    Register &raquo;
               </button>
               <script type="text/javascript">
                    document.getElementById("log").onclick = function() {
                         location.href = "php/loginP4.php";
                    };
                    document.getElementById("reg").onclick = function() {
                         location.href = "php/signup.php";
                    };
               </script>

          </div>

     </section>


</body>

</html>