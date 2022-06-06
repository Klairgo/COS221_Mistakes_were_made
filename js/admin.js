function element(id){
    return document.getElementById(id);
}

function  makeTeam(){
    const arr = ["team_id", "total_earnings", "name", "tournament", "manager_id", "ranking" ,"location"];
    const head = ["Team Id", "Total earnings", "Name", "Tournament", "Manager id", "Ranking", "Location"]
    string = '<div id="login"> <h1>Create Team</h1> <div id="signup_box"> ';
    for(let i = 0; i < team.length; i++){
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
               showError(data.message);
            }
        })
      });
    
}


function makeTournament(){
    arr = ["venue_id", "first_place_id", "second_place_id", "third_place_id", "name"];
    head = ["Venue id", "First place id", "Second place id", "Third place id", "Name"];
    string = '<div id="login"> <h1>Make Tournament</h1>';
}

function makePlayer(){
    arr = ["Name", "Team Id", "Gamertag", "Country"];
}

function makeVenue(){

}

function makeMatch(){

}

function makeSponsor(){

}

function updateAccount(){

}

function updateManager(){

}

function updateTeams(){

}

function updateVenue(){

}

function updateMatch(){

}

function updateSponsoredBy(){

}

function deleteccount(){

}

function deleteSponsor(){

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

