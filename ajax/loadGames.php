<?php
$resultArray;
$symbol = $_POST['symbol'];
$mysqli = new mysqli('localhost', 'game', '0000', 'game');
/*
$query = "select * from games where symbol= '$symbol'";
$results = $mysqli->query($query);
while($row = $results->fetch_assoc()){
    $resultArray[] = $row;
}

echo json_encode($resultArray);
*/

$query;
if ($symbol == 'X'){
    $query = "select * from games where winX > 0 order by winX";
}
else{
    $query = "select * from games where win0 > 0 order by win0";
}
$results = $mysqli->query($query);
//echo $query;
while($row = $results->fetch_assoc()){
    //echo unserialize($row["history"]);
    //$resultArray[] = json_encode($row["history"]);
    $resultArray[] = unserialize($row["history"]);
}

echo json_encode($resultArray);

?>