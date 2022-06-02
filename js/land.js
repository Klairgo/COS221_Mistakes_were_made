    function landonme( whoops){
     switch (whoops) {
          case "to":
               document.getElementById("tor").style.backgroundColor ="#DDA62A";
               document.getElementById("player").style.backgroundColor ="black";
               document.getElementById("team").style.backgroundColor ="black";
               document.getElementById("main").innerHTML=' <div class="flex-v"><div class="flex-c" id="L"></div><div class="flex-c" id="vs">VS</div><div class="flex-c" id="R"></div></div>'
               break;
          case "p":
               document.getElementById("tor").style.backgroundColor ="black";
               document.getElementById("team").style.backgroundColor ="black";
               document.getElementById("player").style.backgroundColor ="#DDA62A";
               document.getElementById("main").innerHTML=' <div class="flex-v"><div class="flex-c" id="L"></div><div class="flex-c" id="vs">LS</div><div class="flex-c" id="R"></div></div>'

               break;
          case "te":
               document.getElementById("tor").style.backgroundColor ="black";
               document.getElementById("player").style.backgroundColor ="black";
               document.getElementById("team").style.backgroundColor ="#DDA62A";
               document.getElementById("main").innerHTML=' <div class="flex-v"><div class="flex-c" id="L"></div><div class="flex-c" id="vs">RS</div><div class="flex-c" id="R"></div></div>'

               break;
          default:
     }
    }