<?php
$symbol = $_POST['symbol'];
$hods = $_POST['hods'];
$myhods = json_decode($hods);
$mysqli = new mysqli('localhost', 'game', '0000', 'game');

// сериализовать историю ходов
//$history = serialize($hods);
$history = $myhods;
$history = serialize($history);
print_r($history);


// проверить наличие записи с такой историей
$result = $mysqli->query("select * from games where history = '$history' limit 1");
if ($result->num_rows == 1){
    echo 'Запись есть, надо обновлять';
    $row = $result->fetch_assoc();
    $idHistory = $row["id"];
    $totalCount = $row["totalCount"];
    $winX = $row["winX"];
    $win0 = $row["win0"];
    $totalCount++; // увеличиваем общее количество игр по стратегии
    if ($symbol == 'X'){
        $winX++; // увеличиваем количество побед X по этой стратегии
    }
    else{
        $win0++; // увеличиваем количество побед 0 по этой стратегии
    }
    $mysqli->query("update games set totalCount = $totalCount, winX = $winX, win0 = $win0 where id = $idHistory");
}
else{
    echo 'Записи нет, надо добавлять';
    if ($symbol == 'X'){
        $mysqli->query("insert into games (history, totalCount, winX, win0) values ('$history', 1, 1, 0)");
    }
    else{
        $mysqli->query("insert into games (history, totalCount, winX, win0) values ('$history', 1, 0, 1)");
    }
}
?>