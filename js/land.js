function landonme(whoops) {
  switch (whoops) {
    case "to":
      document.getElementById("tor").style.backgroundColor = "#DDA62A";
      document.getElementById("player").style.backgroundColor = "black";
      document.getElementById("team").style.backgroundColor = "black";

        ajax(
            {
                "action" : "get_tournament" ,
            },
            function(data){
                if(data.success){
                  //create first date
                  date = data.message[0].data_time.substring(0, 10);
                  //create first tournament name
                  t_name = data.message[0].tournament_name;
                  //create first heading
                  string  =  "<div><h1 style='font-size: 30px;'>" + t_name + "</h1></div>" + "<div><h1>" + date + "</h1></div>";
                  for(i = 0; i < data.message.length; i++){
                    //chech to see if tournament name changed
                    if(data.message[i].tournament_name != t_name){
                      t_name = data.message[i].tournament_name;
                      string += "<div><h1>" + t_name + "</h1></div>";
                    }
                    //check to see if date change
                    else if(data.message[i].data_time.substring(0, 10) != date){
                      date = data.message[i].data_time.substring(0, 10);
                      string += "<div><h1>" + date + "</h1></div>";
                    }
                    string += '<div class="flex-v"><div class="flex-c" id="L" style="font-family: Arial;">'+ 
                                data.message[i].team1_name + '</div><div class="flex-c" id="vs">'+ 
                                data.message[i].data_time.substring(11, 21)+ 
                                '</div><div class="flex-c" id="R" style="font-family: Arial">'+ 
                                data.message[i].team2_name + '</div></div>';
                  }
                  document.getElementById("main").innerHTML = string;
                }
                else{
                  console.log("error");
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

        ajax(
          {
              "action": "get_team",
          },
          function(data){
              if(data.success){
                string = ' <div class="fex-v"><a class="flex-t" onclick ="landonme("tev")"><div id="tname">Team Name</div><div id="trank">Rank</div></a></div>';

                  for(i = 0; i < data.message.length; i++){
                    //chech to see if tournament name changed
                    string += '<div class="fex-v"><a class="flex-t" onclick ="landonme("tev")"><div id="tname" style="font-family: Arial;">'+ 
                              data.message[i].name + '</div><div id="trank" style="font-family: Arial;">'+ 
                              data.message[i].ranking + '</div></a></div>';
                  }
                  document.getElementById("main").innerHTML = string;
              }
              else{
                //show error
              }
          }
          
        );
        
        // document.getElementsByClassName("hero").style.width = "100vh";

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
