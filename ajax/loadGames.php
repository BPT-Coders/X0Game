<?php
$resultArray;
$symbol = $_POST['symbol'];
$mysqli = new mysqli('localhost', 'game', '0000', 'game');
$query = "select * from games where symbol= '$symbol'";
$results = $mysqli->query($query);
while($row = $results->fetch_assoc()){
    $resultArray[] = $row;
}

echo json_encode($resultArray);
?>