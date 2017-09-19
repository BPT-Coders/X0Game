<?php
$symbol = $_POST['symbol'];
$hods = $_POST['hods'];
$myhods = json_decode($hods);
$mysqli = new mysqli('localhost', 'game', '0000', 'game');
$mysqli->query("insert into games (symbol) values ('$symbol')");
$idGame = $mysqli->insert_id;
echo $idGame;
foreach ($myhods as $hod){
    $hod = json_decode($hod, true);
    if($hod['player'] == $symbol){
        $number = $hod['number'];
        $idBox = $hod['id'];
        $mysqli->query("update games set h$number = '$idBox' where id = $idGame");
        //echo $hod['number'].' '.$hod['player'].' '.$hod['id']."\n";
    }

}
?>