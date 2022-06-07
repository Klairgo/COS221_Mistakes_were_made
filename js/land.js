function landonme(whoops, gtag) {
  switch (whoops) {
    case "p":
      document.getElementById("tor").style.backgroundColor = "black";
      document.getElementById("team").style.backgroundColor = "black";
      document.getElementById("player").style.backgroundColor = "#DDA62A";
      //document.getElementById("main").innerHTML =
      //  ' <div class="flex-v"><div class="flex-c" id="L"></div><div class="flex-c" id="vs">LS</div><div class="flex-c" id="R"></div></div>';
      ajax(
        {
          action: "get_player",
        },
        function (data) {
          if (data.success) {
            console.log('shit');
            //handle data.message
            string =
              ' <div class="fex-v"><a class="flex-t" ><div id="tname">Gamer Tag</div><div id="trank">World Rank</div></a></div>';

            for (i = 0; i < data.message.length; i++) {
              //chech to see if tournament name changed
              string +=
                '<div class="fex-v" ><a class="flex-t" onclick="landonme(\'tev\',\'' +
                data.message[i].gamer_tag +
                '\')" ><div id="tname" style="font-family: Arial;">' +
                data.message[i].gamer_tag +
                '</div><div id="trank" style="font-family: Arial;">' +
                data.message[i].world_ranking +
                "</div></a></div>";
            }
            document.getElementById("main").innerHTML = string;
            console.log('shit');
          } else {
            //show error
          }
        }
      );

      break;

    case "te":
      document.getElementById("tor").style.backgroundColor = "black";
      document.getElementById("player").style.backgroundColor = "black";
      document.getElementById("team").style.backgroundColor = "#DDA62A";
      ajax(
        {
          action: "get_team",
        },
        function (data) {
          if (data.success) {
            string =
              ' <div class="fex-v"><a class="flex-t" ><div id="tname">Team Name</div><div id="trank">Rank</div></a></div>';

            for (i = 0; i < data.message.length; i++) {
              //chech to see if tournament name changed
              string +=
                '<div class="fex-v" ><a class="flex-t"  ><div id="tname"  style="font-family: Arial;">' +
                data.message[i].name +
                '</div><div id="trank" style="font-family: Arial;">' +
                data.message[i].ranking +
                '</div></a></div>';
            }
            document.getElementById("main").innerHTML = string;
          } else {
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
          action: "get_player_stats",
          gamer_tag: gtag
        },
        function (data) {
          if (data.success) {
              string =
                '<div class="flex-z">' +
                '<div class="flex-1" id="gtag">' +
                data.message[0].gamer_tag +
                "</div>" +
                '<div class="flex-2" id="rest">' +
                '<div class="flex-1" id="image" style="text-align:centre">' +
                '<img height="300" width="300" src="data:image/png;base64,' + data.message[0].player_img + '"/>' +
                "</div>" +
                '<div class="flex-2" id="restin">' +
                ' <div class="flex-1" id="restin1">' +
                "Player Name: " +
                data.message[0].name +
                "</div>" +
                ' <div class="flex-1" id="restin1">' +
                "Team name: " +
                data.message[0].team_name+
              "</div>" +
                '<div class="flex-1" id="restin1">' +
                "Country: " +
                data.message[0].country +
                "</div>" +
                "</div>" +
                "</div>" +
                '<div class="flex-2" id="rest">' +
                '<div class="flex-2" id="restin">' +
                ' <div class="flex-1" id="restin1">' +
                "World Ranking: " +
                data.message[0].world_ranking +
                "</div>" +
                ' <div class="flex-1" id="restin1">' +
                "GAMES WON: " +
                data.message[0].games_won +
                "</div>" +
                '<div class="flex-1" id="restin1">' +
                " Deaths: " +
                data.message[0].deaths +
                "</div>" +
                '<div class="flex-1" id="restin1">' +
                "Assists: " +
                data.message[0].assists +
                "</div>" +
                '<div class="flex-1" id="restin1">' +
                "Games Played: " +
                data.message[0].games_played +
                " </div>" +
                "</div>" +
                '<div class="flex-2" id="restin">' +
                '<div class="flex-1" id="restin1">' +
                "Utility Damage: " +
                data.message[0].utility_damage +
                "</div>" +
                '<div class="flex-1" id="restin1">' +
                "ADR: " +
                data.message[0].adr +
                "</div>" +
                ' <div class="flex-1" id="restin1">' +
                "Damage Done: " +
                data.message[0].damage_done +
                "</div>" +
                '<div class="flex-1" id="restin1">' +
                "Accuracy: " +
                data.message[0].accuracy +
                "</div>" +
                ' <div class="flex-1" id="restin1">' +
                " Entry Success: " +
                data.message[0].entry_success +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>";
            document.getElementById("main").innerHTML = string;
          } else {
            //show error
          }
        }
      );
      break;

    default:
      document.getElementById("tor").style.backgroundColor = "#DDA62A";
      document.getElementById("player").style.backgroundColor = "black";
      document.getElementById("team").style.backgroundColor = "black";

      ajax(
        {
          action: "get_tournament",
        },
        function (data) {
          if (data.success) {
            //create first date
            date = data.message[0].data_time.substring(0, 10);
            //create first tournament name
            t_name = data.message[0].tournament_name;
           
            //create first heading
            string =
              "<div id='GO'><h1 style='font-size: 30px;'>" +
              t_name +
              "</h1></div>" +
              "<div><h1>" +
              date +
              "</h1></div>";
            for (i = 0; i < data.message.length; i++) {
              //chech to see if tournament name changed
              if (data.message[i].tournament_name != t_name) {
                t_name = data.message[i].tournament_name;
                string +=
                  "<div id='GO'><h1 style='font-size: 30px;'>" +
                  t_name +
                  "</h1></div>";
              }
              //check to see if date change
              if (data.message[i].data_time.substring(0, 10) != date) {
                date = data.message[i].data_time.substring(0, 10);
                string += "<div><h1>" + date + "</h1></div>";
              }
              string +=
                '<div class="flex-v"><div class="flex-c" id="L" style="font-family: Arial;">' +
                data.message[i].team1_name +
                '</div><div class="flex-c" id="vs">' +
                data.message[i].data_time.substring(11, 21) +
                '</div><div class="flex-c" id="R" style="font-family: Arial">' +
                data.message[i].team2_name +
                "</div></div>";
            }
            document.getElementById("main").innerHTML = string;
          } else {
            console.log("error");
            //Show error
          }
        }
      );

      break;
  }
}

function ajax(data, callback) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      var json = JSON.parse(req.responseText);
      callback(json);
    }
  };

  req.open("POST", "../php/database.php", true);

  req.setRequestHeader("Content-type", "application/json");

  req.send(JSON.stringify(data));
}
