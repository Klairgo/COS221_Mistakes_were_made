function landonme(whoops) {
  switch (whoops) {
    case "to":
      document.getElementById("tor").style.backgroundColor = "#DDA62A";
      document.getElementById("player").style.backgroundColor = "black";
      document.getElementById("team").style.backgroundColor = "black";
      document.getElementById("main").innerHTML =
        ' <div class="flex-v"><div class="flex-c" id="L"></div><div class="flex-c" id="vs">VS</div><div class="flex-c" id="R"></div></div>';

        ajax(
            {
                "action" : "get_tournamet" ,
            },
            function(data){
                if(data.success){
                  /*
                    "data.message" format:
                      "message": [
                                  {
                                    "tournament_id": "1",
                                    "venue_id": "1",
                                    "first_place_id": "1",
                                    "second_place_id": "2",
                                    "third_place_id": "3",
                                    "name": "PGL Major Antwerp 2022"
                                  }
                                ]

                    Get data in "data.message"
                    data.message[0].tournament_id  (I think)
                  */
                }
                else{
                  //Show error
                }
            }
        );

      break;

    case "p":
      document.getElementById("tor").style.backgroundColor = "black";
      document.getElementById("team").style.backgroundColor = "black";
      document.getElementById("player").style.backgroundColor = "#DDA62A";
      document.getElementById("main").innerHTML =
        ' <div class="flex-v"><div class="flex-c" id="L"></div><div class="flex-c" id="vs">LS</div><div class="flex-c" id="R"></div></div>';
        ajax(
          {
              "action": "get_player",
          },
          function(data){
              if(data.success){
                //handle data.message
              }
              else{
                //show error
              }
          }
        );

      break;

    case "te":
      document.getElementById("tor").style.backgroundColor = "black";
      document.getElementById("player").style.backgroundColor = "black";
      document.getElementById("team").style.backgroundColor = "#DDA62A";
      document.getElementById("main").innerHTML =
        ' <div class="fex-v"><a class="flex-t" onclick ="landonme("tev")"><div id="tname">Team Name</div><div id="trank">Rank</div></a></div>';

        ajax(
          {
              "action": "get_team",
          },
          function(data){
              if(data.success){
                //handle data.message
              }
              else{
                //show error
              }
          }
        );

      break;

    case "tev":
      document.getElementById("tor").style.backgroundColor = "black";
      document.getElementById("player").style.backgroundColor = "black";
      document.getElementById("team").style.backgroundColor = "#DDA62A";
      document.getElementById("main").innerHTML = 'Hi'

    default:
  }
}


function ajax(data, callback){

    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            var json = JSON.parse(req.responseText);
            callback(json);
        }
    };

    req.open("POST", "../php/database.php", true);

    req.setRequestHeader("Content-type", "application/json");

    req.send(JSON.stringify(data));
}
