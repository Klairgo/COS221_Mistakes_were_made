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
            $instance = new API();
        }
        return $instance->get_articles();
    }

    private function main(){
        $this->param = file_get_contents('php://input');
        $param_data = json_decode($this->param, true);
        if(isset($param_data["action"])){
            if($param_data["action"] == "create_tournament"){
                $this->create_function($param_data);
            }
            else if($param_data["action"] == "get_tournament"){
                $this->get_tournament($param_data);
            }
            else if($param_data["action"] == "create_player"){
                $this->create_player($param_data);

            }
            else if($param_data["action"] == "get_player"){
                $this->get_player($param_data);

            }
            else if($param_data["action"] == "create_venue"){
                $this->create_venue($param_data);

            }
            else if($param_data["action"] == "get_venue"){
                $this->get_venue($param_data);

            }
            else if($param_data["action"] == "create_team"){
                $this->create_team($param_data);

            }
            else if($param_data["action"] == "get_team"){
                $this->get_team($param_data);

            }
            else if($param_data["action"] == "create_match"){
                $this->create_match($param_data);

            }
            else if($param_data["action"] == "get_match"){
                $this->get_match($param_data);

            }
            else{
                return $this->response(false, "Param does not exist");
            }
        }
        else {
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
        
    }
    
    private function get_tournament($data){
    
    }
    
    private function create_player($data){
    
    }
    
    private function get_player($data){
    
    }
    
    private function create_vanue($data){
    
    }
    
    private function get_venue($data){
    
    }
    
    private function create_team($data){
    
    }
    
    private function get_team($data){
    
    }
    
    private function create_match($data){
    
    }
    
    private function get_match($data){

}





}

$database = database::instance();
header("HTTP/1.1 200 OK");
header('Content-Type: application/json');
echo $database;

?>