function element(id){
    return document.getElementById(id);
}

function  makeTeam(){
    const arr = ["team_id", "total_earnings", "name", "tournament", "manager_id", "ranking" ,"location"];
    const head = ["Team Id", "Total earnings", "Name", "Tournament", "Manager id", "Ranking", "Location"]
    string = '<div id="login"> <h1>Create Team</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "create_team" ,
            "team_id" : element(arr[0]).value,
            "total_earnings" : element(arr[1]).value,
            "name" : element(arr[2]).value,
            "tournament" : element(arr[3]).value,
            "manager_id" : element(arr[4]).value,
            "ranking" : element(arr[5]).value,
            "location" : element(arr[6]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
    
}


function makeTournament(){
    arr = ["venue_id", "first_place_id", "second_place_id", "third_place_id", "name"];
    head = ["Venue id", "First place id", "Second place id", "Third place id", "Name"];
    string = '<div id="login"> <h1>Create Tournament</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "create_tournament" ,
            "venue_id" : element(arr[0]).value,
            "first_place_id" : element(arr[1]).value,
            "second_place_id" : element(arr[2]).value,
            "third_place_id" : element(arr[3]).value,
            "name" : element(arr[4]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function makePlayer(){
    arr = ["name", "team_id", "gamertag", "country"];
    head = ["Name", "Team Id", "Gamertag", "Country"];
    string = '<div id="login"> <h1>Create Player</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "create_player" ,
            "name" : element(arr[0]).value,
            "team_id" : element(arr[1]).value,
            "gamertag" : element(arr[2]).value,
            "country" : element(arr[3]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function makeVenue(){
    arr = ["venue_name", "venue_location", "venue_email", "venue_cell_number"];
    head = ["Vanue Name", "Venue Location", "Venue Email", "Venue Cell Number"];
    string = '<div id="login"> <h1>Create Venue</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "create_venue" ,
            "venue_name" : element(arr[0]).value,
            "venue_location" : element(arr[1]).value,
            "venue_email" : element(arr[2]).value,
            "venue_cell_number" : element(arr[3]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function makeMatch(){
    arr = ["data_time", "map_id", "team1_id", "team2_id", "tournament_id"];
    head = ["Date time", "Map id", "Team1 id", "Team2 id", "Tournament id"];
    string = '<div id="login"> <h1>Create Match</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "create_match" ,
            "data_time" : element(arr[0]).value,
            "map_id" : element(arr[1]).value,
            "team1_id" : element(arr[2]).value,
            "team2_id" : element(arr[3]).value,
            "tournament_id" : element(arr[4]).value
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function makeSponsor(){
    arr = ["company_name"];
    head = ["Company Name"];
    string = '<div id="login"> <h1>Create Sponsor</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Create" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "create_sponsor" ,
            "company_name" : element(arr[0]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function updateAccount(){
    arr = ["change_value", "new_value", "account_email"];
    head = ["Change Value", "New Value", "Account Email"];
    string = '<div id="login"> <h1>Update Account</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_accounts" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "account_email" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });

}

function updateManager(){
    arr = ["change_value", "new_value", "manager_email"];
    head = ["Change Value", "New Value", "Manager Email"];
    string = '<div id="login"> <h1>Update Manager</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_manager" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "manager_email" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function updateTeams(){
    arr = ["change_value", "new_value", "team_id"];
    head = ["Change Value", "New Value", "Team Id"];
    string = '<div id="login"> <h1>Update Teams</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_teams" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "team_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function updateVenue(){
    arr = ["change_value", "new_value", "venue_id"];
    head = ["Change Value", "New Value", "Venue Id"];
    string = '<div id="login"> <h1>Update Venue</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_venue" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "venue_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function updateMatch(){
    arr = ["change_value", "new_value", "match_id"];
    head = ["Change Value", "New Value", "Match Id"];
    string = '<div id="login"> <h1>Update Match</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_match" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "match_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function updateSponsoredBy(){
    arr = ["change_value", "new_value", "sponsor_id"];
    head = ["Change Value", "New Value", "Sponsor Id"];
    string = '<div id="login"> <h1>Update Sponsored By</h1> <div id="signup_box"> ';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Update" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/></div> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "update_sponsered_by" ,
            "change_value" : element(arr[0]).value,
            "new_value" : element(arr[1]).value,
            "sponsor_id" : element(arr[2]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               console.log(data.message);
            }
        })
      });
}

function deleteccount(){
    arr = ["email"];
    head = ["Email"];
    string = '<div id="login"> <h1>Delete Account</h1>';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Delete" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "create_team" ,
            "company_name" : element(team[0]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               showError(data.message);
            }
        })
      });
}

function deleteSponsor(){
    arr = ["company_name"];
    head = ["Company Name"];
    string = '<div id="login"> <h1>Delete Sponsor</h1>';
    for(let i = 0; i < arr.length; i++){
        string += ' <div class="field"> <label for="name">' + head[i] + '</label> <input type="text" name="name" id="' + arr[i] + '" placeholder="Enter ' + head[i] +'"/> <small></small> </div>';      
    }
    string += '<div class="field"> <input type="submit" value="Delete" id="button" style="margin-top: 35px" onclick = makeAjax(info)"/> </div>';
    document.getElementById("main").innerHTML = string;
    document.getElementById("button").addEventListener("click", function() {
        const info = {
            "action" : "create_team" ,
            "company_name" : element(team[0]).value,
        }
        ajax(info, function(data){
            if(data.success){
                window.location.href="../php/admin";
            }
            else{
               showError(data.message);
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

