function element(id){
    return document.getElementById(id);
}

function show(id){
    element(id).style.display = "";
}

function hide(id){
    element(id).style.display = "none";
}

function  makeTeam(){
    show("login");
    hide("mess");
    const arr = ["total_earnings", "name", "tournament", "manager_id", "ranking" ,"location"];
    const head = ["Total earnings", "Name", "Tournament wins", "Manager id", "Ranking", "Location"]
    string = '<h1>Create Team</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        val1 = element(arr[0]).value;
        val2 = element(arr[2]).value;
        val3 = element(arr[3]).value;
        val4 = element(arr[4]).value;
        if(Number.isInteger(+val1) == true && check_name(element(arr[1]).value) == false && Number.isInteger(+val2) == true && Number.isInteger(+val3) == true && Number.isInteger(+val4) == true){
        const info = {
            "action" : "create_team" ,
            "total_earnings" : element(arr[0]).value,
            "team_name" : element(arr[1]).value,
            "tour_wins" : element(arr[2]).value,
            "manager_id" : element(arr[3]).value,
            "ranking" : element(arr[4]).value,
            "location" : element(arr[5]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
    }
    else if(Number.isInteger(+val1) == false){alert("Your total earnings is incorrect!");}
    else if(check_name(element(arr[1]).value) == true){alert("Your name is incorrect!");} 
    else if(Number.isInteger(+val2) == false){alert("Your tournament wins is incorrect!");} 
    else if(Number.isInteger(+val3) == false){alert("Your manager ID is incorrect!");}
    else if(Number.isInteger(+val4) == false){alert("Your ranking is incorrect!");}
});
    
}



function makeTournament(){
    show("login");
    hide("mess");
    arr = ["venue_id", "first_place_id", "second_place_id", "third_place_id", "name"];
    head = ["Venue Id", "First place id", "Second place id", "Third place id", "Name"];
    string = '<h1>Create Tournament</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        val1 = (element(arr[0]).value);
        val2 = (element(arr[1]).value);
        val3 = (element(arr[2]).value);
        if(Number.isInteger(+val1) == true && Number.isInteger(+val2) == true && Number.isInteger(+val3) == true && check_name(element(arr[3].value)) == false){
        const info = {
            "action" : "create_tournament" ,
            "venue_id": element(arr[0]).value,
            "first_place_id" : element(arr[1]).value,
            "second_place_id" : element(arr[2]).value,
            "third_place_id" : element(arr[3]).value,
            "name" : element(arr[4]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
    }
    else if(Number.isInteger(+val1) == false){alert("Your first place ID is incorrect!");}
    else if(check_name(element(arr[3]).value) == true){alert("Your name is incorrect!");} 
    else if(Number.isInteger(+val2) == false){alert("Your second place ID is incorrect!");} 
    else if(Number.isInteger(+val3) == false){alert("Your thirds place ID is incorrect!");}
});
}
function getBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        string = reader.result;
        callback(string.substr(22));
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}


function makePlayer(){
    show("login");
    hide("mess");
    arr = ["name", "team_id", "gamertag", "country", "ranking"];
    head = ["Name", "Team Id", "Gamertag", "Country", "Player Ranking"];
    var string = '<h1>Create Player</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += ' <div class="field"> <label for="name">Player Image</label> <input type="file" name="name" id="player_img" accept="image/png, image/jpeg, image/webp"/> <small></small> </div>';      
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        val1 = element(arr[1]).value;
        val2 = element(arr[2]).value;
        if(check_name(element(arr[0]).value) == false && Number.isInteger(+val1) == true && check_name(element(arr[3]).value) == false){
            getBase64(element("player_img").files[0], (data)=>{

                const info = {
                    "action" : "create_player" ,
                    "name" : element(arr[0]).value,
                    "team_id" : element(arr[1]).value,
                    "gamer_tag" : element(arr[2]).value,
                    "country" : element(arr[3]).value,
                    "player_img": data,
                    "ranking": element(arr[4]).value
                }
                ajax(info, function(data){
                    if(data.success){
                        hide("login");
                        element("mess_head").innerHTML = "Success"
                        element("mess_body").innerHTML = data.message;
                        show("mess");
                    }
                    else{
                        hide("login");
                        element("mess_head").innerHTML = "Failed"
                        element("mess_body").innerHTML = data.message;
                        show("mess");
                    }
                });

            });
        }
        else if(check_name(element(arr[0]).value) == true){alert("Your name is incorrect!");} 
        else if(Number.isInteger(+val1) == false){alert("Your team ID is incorrect!");}
        else if(check_name(element(arr[3]).value) == true){alert("Your country is incorrect!");} 
        });
}

function makeVenue(){
    show("login");
    hide("mess");
    arr = ["venue_name", "venue_location", "venue_email", "venue_cell_number"];
    head = ["Vanue Name", "Venue Location", "Venue Email", "Venue Cell Number"];
    string = '<h1>Create Venue</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        val = element(arr[3]).value;
        if(check_name(element(arr[0]).value) == false && check_email(element(arr[2]).value) == true && Number.isInteger(+val) == true){
        const info = {
            "action" : "create_venue" ,
            "venue_name" : element(arr[0]).value,
            "venue_location" : element(arr[1]).value,
            "venue_email" : element(arr[2]).value,
            "venue_cell_number" : element(arr[3]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      }
      else if(check_name(element(arr[0]).value) == true){alert("Your name is incorrect!");} 
      else if(Number.isInteger(+val) == false){alert("Your call number is incorrect!");}
      else if(check_email(element(arr[2]).value) == false){alert("Your email is incorrect!");} 
    });
}

function makeMatch(){
    show("login");
    hide("mess");
    arr = ["map_id", "team1_id", "team2_id", "tournament_id", "time"];
    head = ["Map id", "Team1 id", "Team2 id", "Tournament id", "Time (yyyy-mm-dd hh:mm:ss)"];
    string = '<h1>Create Match</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        val1 = (element(arr[0]).value);
        val2 = (element(arr[1]).value);
        val3 = (element(arr[2]).value);
        val4 = (element(arr[3]).value);
        val5 = (element(arr[4]).value);
        if(Number.isInteger(+val1) == true && Number.isInteger(+val2) == true && Number.isInteger(+val3) == true && Number.isInteger(+val4) == true && check_date_time(val5) == true){
        const info = {
            "action" : "create_match" ,
            "map_id" : element(arr[0]).value,
            "team1_id" : element(arr[1]).value,
            "team2_id" : element(arr[2]).value,
            "tournament_id" : element(arr[3]).value,
            "time": element(arr[4]).value
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      }
      else if(Number.isInteger(+val1) == false){alert("Your map ID is incorrect!");}
      else if(Number.isInteger(+val2) == false){alert("Your team1 ID is incorrect!");}
      else if(Number.isInteger(+val3) == false){alert("Your team2 ID is incorrect!");}
      else if(Number.isInteger(+val4) == false){alert("Your tournament ID is incorrect!");}
      else if(check_date_time(+val5) == false){alert("Use correct format for data-time!");}
    });
}

function makeSponsor(){
    show("login");
    hide("mess");
    arr = ["company_name"];
    head = ["Company Name"];
    string = '<h1>Create Sponsor</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/>';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        if(check_name(element(arr[0].value)) == false){
        const info = {
            "action" : "create_sponsor" ,
            "company_name" : element(arr[0]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");

            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      }else{
        alert("Your information is incorrect!");
      }});
}

function updateAccount(){
    show("login");
    hide("mess");
    arr = ["change_value", "new_value", "account_email"];
    head = ["Change Attribute", "New Value", "Account Email"];
    string = '<h1>Update Account</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_accounts" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "account_email" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });

}

function updateManager(){
    show("login");
    hide("mess");
    arr = ["change_value", "new_value", "manager_email"];
    head = ["Change Attribute", "New Value", "Manager Email"];
    string = '<h1>Update Manager</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_manager" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "manager_email" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
}

function updateTeams(){
    show("login");
    hide("mess");
    arr = ["change_value", "new_value", "team_id"];
    head = ["Change Attribute", "New Value", "Team Id"];
    string = '<h1>Update Teams</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_teams" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "team_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
}

function updateVenue(){
    show("login");
    hide("mess");
    arr = ["change_value", "new_value", "venue_id"];
    head = ["Change Attribute", "New Value", "Venue Id"];
    string = '<h1>Update Venue</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_venue" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "venue_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
}

function updateMatch(){
    show("login");
    hide("mess");
    arr = ["change_value", "new_value", "match_id"];
    head = ["Change Attribute", "New Value", "Match Id"];
    string = '<h1>Update Match</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_match" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "match_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
}

function updateMatchStats(){
    show("login");
    hide("mess");
    arr = ["change_value", "new_value", "match_id"];
    head = ["Change Attribute", "New Value", "Match Id"];
    string = '<h1>Update Match Statistics</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_match_stats" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "match_id" : element(arr[2]).value
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
}

function updatePlayerStats(){
    show("login");
    hide("mess");
    arr = ["change_value", "new_value", "player_id"];
    head = ["Change Attribute", "New Value", "Player Id"];
    string = '<h1>Update Player Statistics</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_player_stats" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "player_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
}

function updateSponsoredBy(){
    show("login");
    hide("mess");
    arr = ["change_value", "new_value", "sponsor_id"];
    head = ["Change Attribute", "New Value", "Sponsor Id"];
    string = '<h1>Update Sponsored By</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_sponsored_by" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "sponsor_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
}

function deleteccount(){
    show("login");
    hide("mess");
    arr = ["email"];
    head = ["Email"];
    string = '<h1>Delete Account</h1> <div id="signup_box">';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Delete" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/> </div>';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "delete_account" ,
            "email" : element(arr[0]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
}

function deleteSponsor(){
    show("login");
    hide("mess");
    arr = ["sponsor_name"];
    head = ["Sponsor Name"];
    string = '<h1>Delete Sponsor</h1> <div id="signup_box">';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Delete" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/> </div> ';
    document.getElementById("login").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "delete_sponsor" ,
            "sponsor_name" : element(arr[0]).value,
        }
        ajax(info, function(data){
            if(data.success){
                hide("login");
                element("mess_head").innerHTML = "Success"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
            else{
                hide("login");
                element("mess_head").innerHTML = "Failed"
                element("mess_body").innerHTML = data.message;
                show("mess");
            }
        })
      });
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

const check_name = (name) => {
    const reg = /[ `!,.<>@#$%^()_+\-&*=\[\]{};':"\\|\/?~]/; 
    return reg.test(name);
}

const check_email = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return reg.test(email);
};


const check_date_time = (time) => {
    var reg=/^([0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2})$/;
    return reg.test(time);
};