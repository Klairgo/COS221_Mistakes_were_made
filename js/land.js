function landonme(whoops, gtag) {
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
                  string  =  "<div id='GO'><h1 style='font-size: 30px;'>" + t_name + "</h1></div>" + "<div><h1>" + date + "</h1></div>";
                  for(i = 0; i < data.message.length; i++){
                    //chech to see if tournament name changed
                    if(data.message[i].tournament_name != t_name){
                      t_name = data.message[i].tournament_name;
                      string += "<div id='GO'><h1 style='font-size: 30px;'>" + t_name + "</h1></div>";
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
                string = ' <div class="fex-v"><a class="flex-t" ><div id="tname">Gamer Tag</div><div id="trank">World Rank</div></a></div>';

                for(i = 0; i < data.message.length; i++){
                  //chech to see if tournament name changed
                  string += '<div class="fex-v" ><a class="flex-t" onclick="landonme(`tev`,"'+data.message[i].gamer_tag+')" ><div id="tname" style="font-family: Arial;">'+ 
                            data.message[i].gamer_tag + '</div><div id="trank" style="font-family: Arial;">'+ 
                            data.message[i].world_ranking + '</div></a></div>';
                }
                document.getElementById("main").innerHTML = string;
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
                string = ' <div class="fex-v"><a class="flex-t" ><div id="tname">Team Name</div><div id="trank">Rank</div></a></div>';

                  for(i = 0; i < data.message.length; i++){
                    //chech to see if tournament name changed
                    string += '<div class="fex-v" ><a class="flex-t"  ><div id="tname"  style="font-family: Arial;">'+ 
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
      document.getElementById("team").style.backgroundColor = "black";
      document.getElementById("player").style.backgroundColor = "#DDA62A";
      ajax(
        {
            "action": "get_player_stats",
        },
        function(data){
            if(data.success){

                for(i = 0; i < data.message.length; i++){
                  //chech to see if tournament name changed
                  string += '<div class="flex-z">'+
                  '<div class="flex-1" id="gtag">'+
                  data.message[i].gamer_tag+
                  '</div>'+
  
                  '<div class="flex-2" id="rest">'+
                      '<div class="flex-1" id="image">'+
                          'Image'+
                      '</div>'+
  
                      '<div class="flex-2" id="restin">'+
                         ' <div class="flex-1" id="restin1">'+
                              'Player Name: '+data.message[i].name+
                          '</div>'+
                         ' <div class="flex-1" id="restin1">'+
                              'Team name: '+data.message[i].team_name
                          '</div>'+
                          '<div class="flex-1" id="restin1">'+
                              'Country: '+data.message[i].country+
                          '</div>'+
  
  
                      '</div>'+
                  '</div>' +
                  '<div class="flex-2" id="rest">' +
                      '<div class="flex-2" id="restin">'+
                         ' <div class="flex-1" id="restin1">'+
                              'World Ranking: ' +data.message[i].world_ranking+
                          '</div>'+
                         ' <div class="flex-1" id="restin1">'+
                              'GAMES WON: ' +data.message[i].games_won+
                          '</div>'+
  
                          '<div class="flex-1" id="restin1">' +
                             ' Deaths: '+data.message[i].deaths+
                          '</div>' +
                          '<div class="flex-1" id="restin1">' +
                             'Assists: '+data.message[i].assists+
                          '</div>'+
                          '<div class="flex-1" id="restin1">'+
                              'Games Played: ' +data.message[i].games_played+
                         ' </div>'+
  
  
                      '</div>'+
  
                      '<div class="flex-2" id="restin">'+
                          '<div class="flex-1" id="restin1">'+
                              'Utility Damage: '+data.message[i].damage+
                          '</div>'+
  
                          '<div class="flex-1" id="restin1">' +
                              'ADR: '+data.message[i].adr+
                          '</div>'+
                         ' <div class="flex-1" id="restin1">'+
                              'Damage Done: ' +data.message[i].damage_done+
                          '</div>'+
                          '<div class="flex-1" id="restin1">'+
                              'Accuracy: '+data.message[i].accuracy+
                          '</div>'+
                         ' <div class="flex-1" id="restin1">'+
                             ' Entry Success:'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>';
                }
                document.getElementById("main").innerHTML = string;
            }
            else{
              //show error
            }
        }
        
      );
      break;

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
