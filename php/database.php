<?php
/*
Post data of form: 
    {
        action : "create_tournament",
        venue : "Districs",
        Fplace : "mistakes were made",
        ...
    }
*/
include_once 'config.php';
$conn = openCon();
class database {
    
    private $param;
    private $return;
    private $data_internal;
    private $data_external;

    public static function instance(){
        static $instance = null;
        if($instance == null){
            $instance = new database();
        }
        return $instance->main();
    }

    private function main(){
    
        $this->param = file_get_contents('php://input');
        $param_data = json_decode($this->param, true);
        if(isset($param_data["action"])){
            if($param_data["action"] == "create_tournament"){
                $status = $this->create_tournament($param_data);
                if($status == "true"){
                    return $this->response(true, "Created tournament");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "create_player"){
                $status = $this->create_player($param_data);
                if($status == "true"){
                    return $this->response(true, "Created player");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "create_venue"){
                $status = $this->create_venue($param_data);
                if($status == "true"){
                    return $this->response(true, "Created vanue");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "create_team"){
                $status = $this->create_team($param_data);
                if($status == "true"){
                    return $this->response(true, "Created team");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "create_match"){
                $status = $this->create_match($param_data);
                if($status == "true"){
                    return $this->response(true, "Created match");
                }
                else{
                    return $this->response(false, $status);
                }

            }
            else if($param_data["action"] == "create_sponsor"){
                $status = $this->create_sponsor($param_data);
                if($status == "true"){
                    return $this->response(true, "Created sponsor");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            //START OF GET
            else if($param_data["action"] == "get_tournament"){
                return $this->response("true", $this->get_tournament());
            }
            else if($param_data["action"] == "get_player"){
                return $this->response(true, $this->get_player());
            }
            else if($param_data["action"] == "get_venue"){
                return $this->response(true,  $this->get_venue());
            }
            else if($param_data["action"] == "get_team"){
                return $this->response(true, $this->get_team());
            }
            else if($param_data["action"] == "get_match"){
                return $this->response(true, $this->get_match());
            }
            else if($param_data["action"] == "get_player_stats"){
                return $this->response(true, $this->get_player_stats($param_data));
            }   
            else if($param_data["action"] == "get_match_stats"){
                return $this->response(true, $this->get_match_stats());
            }
            //START OF UPDATE
            else if($param_data["action"] == "update_accounts"){
                $status = $this->update_accounts($param_data);
                if($status == "true"){
                    return $this->response(true, "Account updated");
                }
                else{
                    return $this->response(false, $status);
                }

            }
            else if($param_data["action"] == "update_manager"){
                $status = $this->update_manager($param_data);
                if($status == "true"){
                    return $this->response(true, "Manager updated");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "update_teams"){
                $status = $this->update_teams($param_data);
                if($status == "true"){
                    return $this->response(true, "Team updated");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "update_venue"){
                $status = $this->update_venue($param_data);
                if($status == "true"){
                    return $this->response(true, "Venue updated");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "update_match"){
                $status = $this->update_match($param_data);
                if($status == "true"){
                    return $this->response(true, "Match updated");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "update_match_stats"){
                $status = $this->update_match_stats($param_data);
                if($status == "true"){
                    return $this->response(true, "Match Stats updated");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "update_player_stats"){
                $status = $this->update_player_stats($param_data);
                if($status == "true"){
                    return $this->response(true, "Match Stats updated");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "update_sponsored_by"){
                $status = $this->update_sponsored_by($param_data);
                if($status == "true"){
                    return $this->response(true, "Sponsor updated");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            //This is where delete starts
            else if($param_data["action"] == "delete_account"){
                $status = $this->delete_account($param_data);
                if($status == "true"){
                    return $this->response(true, "User with email ". $param_data["email"]." was deleted");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else if($param_data["action"] == "delete_sponsor"){
                $status = $this->delete_sponsor($param_data);
                if($status == "true"){
                    return $this->response(true, "Sponsor ". $param_data["sponsor_name"]." was deleted");
                }
                else{
                    return $this->response(false, $status);
                }
            }
            else{
                return $this->response(false, "Action does not exist");
            }
        }
        else{
            return $this->response(false, "Param 'action' was not set");
        }
    
    }

    private function response($success, $message = ""){
    
        return json_encode([
            "success" => $success,
            "message" => $message
        ]);
    }     
    
    private function create_tournament($data){
        if(!isset($data["venue_id"]) || !isset($data["first_place_id"]) || !isset($data["second_place_id"]) || !isset($data["third_place_id"]) || !isset($data["name"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("INSERT INTO tournament (venue_id, first_place_id, second_place_id, third_place_id, name) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $data["venue_id"], $data["first_place_id"], $data["second_place_id"], $data["third_place_id"], $data["name"]); 
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        $stmt->close();
        return true;
    }
    
    private function get_tournament(){
        global $conn;
        $stmt = "SELECT E.name AS tournament_name, T1.name AS team1_name, T2.name AS team2_name, data_time FROM teams AS T2 INNER JOIN (teams AS T1 INNER JOIN (tournament AS E INNER JOIN matches AS D ON E.tournament_id=D.tournament_id) ON T1.team_id = D.team1_id) ON T2.team_id = D.team2_id;";
        $result = $conn->query($stmt);
        $arr = [];
        while($row = $result->fetch_assoc()){
            array_push($arr, $row);
        }
        return $arr;
    }
    
    private function create_player($data){
        if(!isset($data["name"]) || !isset($data["team_id"]) || !isset($data["gamer_tag"]) || !isset($data["country"]) || !isset($data["player_img"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("INSERT INTO player (name, team_id, gamer_tag, country) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $data["name"], $data["team_id"], $data["gamer_tag"], $data["country"], $data["player_img"]); 
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        $stmt->close();
        return true;

    }
    
    private function get_player(){
        global $conn;
        $stmt = "SELECT gamer_tag, world_ranking, player_img from (player AS P INNER JOIN player_statistics AS S ON P.player_id = S.player_id) ORDER BY world_ranking";
        $result = $conn->query($stmt);
        $arr = [];
        while($row = $result->fetch_assoc()){
            array_push($arr, $row);
        }
        return $arr;
    }

    
    private function create_venue($data){
        if(!isset($data["venue_name"]) || !isset($data["venue_location"]) || !isset($data["venue_email"]) || !isset($data["venue_cell_number"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("INSERT INTO venue (venue_name, venue_location, venue_email, venue_cell_number) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $data["venue_name"], $data["venue_location"], $data["venue_email"], $data["venue_cell_number"]); 
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        $stmt->close();
        return true;
    }
    
    private function get_venue(){
        global $conn;
        $stmt = "SELECT * FROM venue";
        $result = $conn->query($stmt); 
        $arr = [];
        while($row = $result->fetch_assoc()){
            array_push($arr, $row);
        }
        return $arr;
    }
    
    private function create_team($data){
        if(!isset($data["total_earnings"]) || !isset($data["team_name"]) || !isset($data["tour_wins"]) || !isset($data["manager_id"]) || !isset($data["ranking"]) || !isset($data["location"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("INSERT INTO teams (total_earnings, name, tournament_wins, manager_id, ranking, location) VALUES (?,?,?,?,?,?)");
        $stmt->bind_param("ssssss", $data["total_earnings"], $data["team_name"], $data["tour_wins"], $data["manager_id"], $data["ranking"], $data["location"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }
    
    private function get_team(){
        global $conn;
        $stmt = "SELECT * FROM teams ORDER BY ranking";
        $result = $conn->query($stmt); 
        $arr = [];
        while($row = $result->fetch_assoc()){
            array_push($arr, $row);
        }
        return $arr;
    }
    
    private function create_match($data){
        if(!isset($data["map_id"]) || !isset($data["team1_id"]) || !isset($data["team2_id"]) || !isset($data["tournament_id"]) || !isset($data["time"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("INSERT INTO matches (map_id, tournament_id, team1_id, team2_id, data_time) VALUES (?,?,?,?,?)");
        $stmt->bind_param("sssss", $data["map_id"], $data["tournament_id"], $data["team1_id"], $data["team2_id"], $data["time"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }   
    
    private function get_match(){
        global $conn;
        $stmt = "SELECT * FROM matches";
        $result = $conn->query($stmt); 
        $arr = [];
        while($row = $result->fetch_assoc()){
            array_push($arr, $row);
        }
        return $arr;
    }

    private function create_sponsor($data){
        if(!isset($data["company_name"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("INSERT INTO sponsor (company_name) VALUES (?)");
        $stmt->bind_param("s", $data["company_name"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    private function update_accounts($data){
        if(!isset($data["change_value"]) || !isset($data["new_value"]) || !isset($data["account_email"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("UPDATE users SET ". $data["change_value"]. " = ? WHERE user_email = ?");
        if($stmt == false){
            return "Change attribute does not exist";
        }
        $stmt->bind_param("ss",$data["new_value"], $data["account_email"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    private function update_manager($data){
        if(!isset($data["change_value"]) || !isset($data["new_value"]) || !isset($data["manager_email"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("UPDATE manager SET ". $data["change_value"]. " = ? WHERE email = ?");
        if($stmt == false){
            return "Change attribute does not exist";
        }
        $stmt->bind_param("ss",$data["new_value"], $data["manager_email"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    private function update_teams($data){
        if(!isset($data["change_value"]) || !isset($data["new_value"]) || !isset($data["team_id"])){
            return "Not all attributes were given";
            return false;
        }
        global $conn;
        $stmt = $conn->prepare("UPDATE teams SET ". $data["change_value"]. " = ? WHERE team_id = ?");
        if($stmt == false){
            return "Change attribute does not exist";
        }
        $stmt->bind_param("ss",$data["new_value"], $data["team_id"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    private function update_venue($data){
        if(!isset($data["change_value"]) || !isset($data["new_value"]) || !isset($data["venue_id"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("UPDATE venue SET ". $data["change_value"]. " = ? WHERE venue_id = ?");
        if($stmt == false){
            return "Change attribute does not exist";
        }
        $stmt->bind_param("ss",$data["new_value"], $data["venue_id"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    private function update_match($data){
        if(!isset($data["change_value"]) || !isset($data["new_value"]) || !isset($data["match_id"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("UPDATE matches SET ". $data["change_value"]. " = ? WHERE match_id = ?");
        if($stmt == false){
            return "Change attribute does not exist";
        }
        $stmt->bind_param("ss",$data["new_value"], $data["match_id"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    private function update_sponsored_by($data){
        if(!isset($data["change_value"]) || !isset($data["new_value"]) || !isset($data["sponsor_id"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("UPDATE sponsored_by SET ". $data["change_value"]. " = ? WHERE sponsor_id = ?");
        if($stmt == false){
            return "Change attribute does not exist";
        }
        $stmt->bind_param("ss",$data["new_value"], $data["sponsor_id"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    public function delete_account($data){
        if(!isset($data["email"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("DELETE FROM accounts WHERE email = ?");
        $stmt->bind_param("s", $data["email"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    public function delete_sponsor($data){
        if(!isset($data["sponsor_name"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("DELETE FROM sponsor WHERE company_name = ?");
        $stmt->bind_param("s", $data["sponsor_name"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    private function get_player_stats($data){
        if(!isset($data["gamer_tag"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("SELECT gamer_tag, P.name, T.name AS team_name, country, world_ranking, games_won, deaths, assists, games_played, utility_damage, adr, damage_done, accuracy, entry_success FROM (player_statistics AS S INNER JOIN(player AS P INNER JOIN teams AS T ON P.team_id = T.team_id) ON P.player_id = S.player_id) WHERE P.gamer_tag = ?");
        $stmt->bind_param("s", $data["gamer_tag"]);
        $stmt->execute();
        $result = $stmt->get_result();
        $arr = [];
        while($row = $result->fetch_assoc()){
            array_push($arr, $row);
        }
        return $arr;
    } 

    private function get_match_stats(){
        global $conn;
        $stmt = "SELECT * FROM match_statistics";
        $result = $conn->query($stmt); 
        $arr = [];
        while($row = $result->fetch_assoc()){
            array_push($arr, $row);
        }
        return $arr;
    } 

    private function update_match_stats($data){
        if(!isset($data["change_value"]) || !isset($data["new_value"]) || !isset($data["match_id"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("UPDATE match_statistics SET ". $data["change_value"]. " = ? WHERE match_id = ?");
        if($stmt == false){
            return "Change attribute does not exist";
        }
        $stmt->bind_param("ss",$data["new_value"], $data["match_id"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }

    private function update_player_stats($data){
        if(!isset($data["change_value"]) || !isset($data["new_value"]) || !isset($data["player_id"])){
            return "Not all attributes were given";
        }
        global $conn;
        $stmt = $conn->prepare("UPDATE player_statistics SET ". $data["change_value"]. " = ? WHERE player_id = ?");
        if($stmt == false){
            return "Change attribute does not exist";
        }
        $stmt->bind_param("ss",$data["new_value"], $data["player_id"]);
        $stmt->execute();
        if($stmt->error){
            return $stmt->error;
        }
        return true;
    }
}




$database = database::instance();
header("HTTP/1.1 200 OK");
header('Content-Type: application/json');
echo $database;

?>