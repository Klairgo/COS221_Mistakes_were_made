<?php
echo '<!DOCTYPE html>

<html>

<head>
  <meta>
  <title>CSGO</title>
  <meta charset="UTF-8" />
  <meta name="author" content="Mistakes were made" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </meta>
  <link rel="stylesheet" href="../css/dropdown.css">
  <link rel="icon" href="../css/img/soldier.png">
  <script src="../js/admin.js"></script>
</head>

<body>
  <div class = "topnav">
  <div class="dropdown">
    <button class="dropbtn">Create</button>
    <div class="dropdown-content">
      <a onclick="makeTeam()">Team</a>
      <a onclick="makeTournament()">Tournament</a>
      <a onclick="makePlayer()">Player</a>
      <a onclick="makeVenue()">Venue</a>
      <a onclick="makeMatch()">Match</a>
      <a onclick="makeSponsor()">Sponsor</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Update</button>
    <div class="dropdown-content">
      <a onclick="updateAccount()">Account</a>
      <a onclick="updateManager()">Manager</a>
      <a onclick="updateTeams()">Teams</a>
      <a onclick="updateVenue()">Venue</a>
      <a onclick="updateMatch()">Match</a>
      <a onclick="updateMatchStats()">Match Statistics</a>
      <a onclick="updatePlayerStats()">Player Statistics</a>
      <a onclick="updateSponsoredBy()">Sponsor</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Delete</button>
    <div class="dropdown-content">
      <a onclick="deleteccount()">Account</a>
      <a onclick="deleteSponsor()">Sponsor</a>
    </div>
  </div>
  <a id="back" href="landing.php">Back</a>
</div>
    
</body>

</html>';
?>