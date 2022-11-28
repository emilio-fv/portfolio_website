<?php 
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// check if form is filled out
if(empty($_POST['firstName']) && empty($_POST['email']) && empty($_POST['message'])) die();

if ($_POST)
    {
        // set response code to 200 ok
        http_response_code(200);
        $subject = $_POST['firstName'];
        $to = "emiliofv.sd@gmail.com";
        $from = $_POST['email'];

        // message data 
        
        // headers
    }
?>