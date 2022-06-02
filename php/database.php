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
                $this->create_tournament($param_data);
            }
            else if($param_data["action"] == "get_tournament"){
                $this->get_tournament();
            }
            else if($param_data["action"] == "create_player"){
                $this->create_player($param_data);
            }
            else if($param_data["action"] == "get_player"){
                $this->get_player();
            }
            else if($param_data["action"] == "create_venue"){
                $this->create_venue($param_data);
            }
            else if($param_data["action"] == "get_venue"){
                $this->get_venue();
            }
            else if($param_data["action"] == "create_team"){
                $this->create_team($param_data);
            }
            else if($param_data["action"] == "get_team"){
                $this->get_team();
            }
            else if($param_data["action"] == "create_match"){
                $this->create_match($param_data);
            }
            else if($param_data["action"] == "get_match"){
                $this->get_match();
            }
            //START OF UPDATE
            else if($param_data["action"] == "update_accounts"){
                $this->update_accounts($param_data);
            }
            else if($param_data["action"] == "update_manager"){
                $this->update_manager($param_data);
            }
            else if($param_data["action"] == "update_teams"){
                $this->update_teams($param_data);
            }
            else if($param_data["action"] == "update_venue"){
                $this->update_venue($param_data);
            }
            else if($param_data["action"] == "update_match"){
                $this->update_match($param_data);
            }
            else if($param_data["action"] == "update_sponsored_by"){
                $this->update_sponsered_by($param_data);
            }
            else if($param_data["action"] = "create_sponsor"){
                $this->create_sponsor($param_data);
            }
            else{
                return $this->response(false, "Param does not exist");
            }
        }
        else{
            return $this->response(false, "Param 'type' was not given");
        }
    
    }

    private function response($success, $message = ""){
    
        return json_encode([
            "success" => $success,
            "message" => $message
        ]);
    }     
    
    private function create_tournament($data){
        $stmt = $conn->prepare("INSERT INTO tournament (venue_id, first_place_id, second_place_id, third_place_id) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $data["venue"], $data["first_place_id"], $data["second_place_id"], $data["third_place_id"]); 
        $stmt->execute();
        $stmt->close();
    }
    
    private function get_tournament(){
        $stmt = "SELECT * from tournament";
        $result = $conn->query($stmt);
        $return = $result->fetch_assoc();
    }
    
    private function create_player($data){
        $stmt = $conn->prepare("INSERT INTO player (name, team_id, gamer_tag, country) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $data["name"], $data["team_id"], $data["gamer_tag"], $data["country"]); 
        $stmt->execute();
        $stmt->close();
    
    }
    
    private function get_player(){
        $stmt = "SELECT * from player";
        $result = $conn->query($stmt);
        $return = $result->fetch_assoc();
    }
    
    private function create_venue($data){
        $stmt = $conn->prepare("INSERT INTO venue (venue_name, venue_location, venue_email, venue_call_number) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $data["venue_name"], $data["venue_location"], $data["venue_email"], $data["vanue_call_number"]); 
        $stmt->execute();
        $stmt->close();
    
    }
    
    private function get_venue(){
        $sql = "SELECT * FROM venue";
        $stmt = $conn->prepare($sql); 
        $stmt->execute();
        $result = $stmt->get_result(); 
        $user = $result->fetch_assoc();
        return $user;
    }
    
    private function create_team($data){
        $stmt = $conn->prepare("INSERT INTO teams (total_earnings, name, tournament_wins, manager_id, ranking, location) VALUES (?,?,?,?,?,?)");
        $stmt->bind_param("ssssss", $data["total_earnings"], $data["team_name"], $data["tour_wins"], $data["manager_id"], $data["ranking"], $data["location"]);
        $stmt->execute();
    }
    
    private function get_team($data){
        $sql = "SELECT * FROM team";
        $stmt = $conn->prepare($sql); 
        $stmt->execute();
        $result = $stmt->get_result(); 
        $user = $result->fetch_assoc();
        return $user;
    }
    
    private function create_match($data){
        $stmt = $conn->prepare("INSERT INTO matches (match_id, team1_id, team2_id) VALUES (?,?,?)");
        $stmt->bind_param("sss", $data["match_id"], $data["team1_id"], $data["team2_id"]);
        $stmt->execute();
    }   
    
    private function get_match(){
        $sql = "SELECT * FROM matches";
        $stmt = $conn->prepare($sql); 
        $stmt->execute();
        $result = $stmt->get_result(); 
        $user = $result->fetch_assoc();
        return $user;

    private function create_sponsor($data){
        $stmt = $conn->prepare("INSERT INTO matches (company_name) VALUES (?)");
        $stmt->bind_param("s", $data["company_name"]);
        $stmt->execute();
    }

    private function update_accounts($data){
    }

    private function update_manager($data){
    }

    private function update_teams($data){
    }

    private function update_venue($data){
    }

    private function update_match($data){
    }

    private function update_sponsered_by($data){
    }

}


$database = database::instance();
header("HTTP/1.1 200 OK");
header('Content-Type: application/json');
echo $database;

?>