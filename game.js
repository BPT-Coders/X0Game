var curPlayer = 'X';
var downCount = 9;

var msg;

function gameOver(){
    $('#gameField').html("Конец игры<br>");
    $('#gameField').append(msg);
    console.log("Отправить в базу ход игры");
}

function startScreen() {
    $('#gameField').html('');
    for (i = 1; i < 4; i++){
        for (j = 1; j < 4; j++){
            $('#gameField').append('<input class="gameBox" type="button" value=" " onclick="hod(this)" id="' + i + j +'">');
        }
        $('#gameField').append('<br>');
    }
}

function hod(el){
    $('#' + el.id).val(curPlayer);
    if (checkGameOver(el)){
        gameOver();
    }
    changePlayer();
}

function changePlayer(){
    if (curPlayer == 'X'){
        curPlayer = '0';
    }
    else{
        curPlayer = 'X';
    }
    downCount--;
}

function checkGameOver(el){
    
    // Проверка на ничью
    if (downCount <= 1){
        msg = 'Ничья!';
        return true;
    }
    
    // проверка по столбцу
    var idCol = el.id.substring(1, 2);
    var r1 = $('#1' + idCol).val();
    var r2 = $('#2' + idCol).val();
    var r3 = $('#3' + idCol).val();
    if ((r1 == r2) && (r2 == r3)){
        msg = 'Победил ' + curPlayer;
        return true;
    }
    
    // проверка по строке
    var idRow = el.id.substring(0, 1);
    var c1 = $('#' + idRow + '1').val();
    var c2 = $('#' + idRow + '2').val();
    var c3 = $('#' + idRow + '3').val();
    if ((c1 == c2) && (c2 == c3)){
        msg = 'Победил ' + curPlayer;
        return true;
    }
    
    // проверка по диагоналям
    var f11 = $('#11').val();
    var f22 = $('#22').val();
    var f33 = $('#33').val();
    var f13 = $('#13').val();
    var f31 = $('#31').val();
    if ((f11 == f22) && (f22 == f33) && (f22 != ' ')){
        msg = 'Победил ' + curPlayer;
        return true;
    }
    if ((f13 == f22) && (f22 == f31 && (f22 != ' '))){
        msg = 'Победил ' + curPlayer;
        return true;
    }
    return false;
}
