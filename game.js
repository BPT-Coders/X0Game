var curPlayer = 'X';
var downCount = 1;
var hods = []; //история ходов
var winPlayer;
var ii = [];
var curStrategy;
var msg;
var pcPlayer;


function startScreen() {
    $('#gameField').html('<h2>Выберите свой символ:</h2><br>');
    $('#gameField').append('<input type="button" value="X" onclick="gameScreen(\'0\')"><input type="button" value="0" onclick="gameScreen(\'X\')">');
    
}

function gameScreen(symbolPC){
    pcPlayer = symbolPC;
    getIIHods();
    if(ii.length > 0){
        curStrategy = ii[ii.length - 1];
    }
    $('#gameField').html('');
    for (i = 1; i < 4; i++){
        for (j = 1; j < 4; j++){
            $('#gameField').append('<input class="gameBox" type="button" value=" " onclick="hod(this)" id="' + i + j +'">');
        }
        $('#gameField').append('<br>');
    }
    console.log(pcPlayer);
    if (pcPlayer == 'X'){
        makePCHod();
        console.log('Первым ходить будет PC');
    }
    else {
        console.log('Первым ходить будет User');
    }
}

function gameOver(){
    $('#gameField').html("Конец игры<br>");
    $('#gameField').append(msg);
    if (winPlayer != '-'){
        console.log("Отправить в базу ход игры");
        console.log(winPlayer);
        
        hods = JSON.stringify(hods);
        $.ajax({
			async: false,
			type: "POST",
			url: "./ajax/saveGame.php",
            data: 'hods=' + hods + '&symbol=' + winPlayer,
			dataType:"text",
			error: function () {	
				alert( "Ошибка чтения текущего режима" );
			},
			success: function (response) {
				console.log('Игра успешно сохранена');
                console.log(response);
			}
        });
        
        
        
    }
    else{
        console.log("Ничья нам в базе не нужна");
    }
}

function writeHistory(id){
    var curHod = {
        "number": downCount,
        "player": curPlayer,
        "id": id
    }
    curHod = JSON.stringify(curHod);
    hods.push(curHod);
    //console.clear();
    //console.log(hods);
    //console.log(downCount);
}







function getIIHods(){
    $.ajax({
			async: false,
			type: "POST",
			url: "./ajax/loadGames.php",
            data: 'symbol=' + pcPlayer,
			dataType:"json",
			error: function () {	
				alert( "Ошибка чтения списка разрешённых ip" );
			},
			success: function (response) {
				ii = response;
                console.log(ii);
                console.log(ii.length);
			}
	});
}

function hod(el){
    if($('#' + el.id).val() == ' '){
        writeHistory(el.id);
        $('#' + el.id).val(curPlayer);
        if (checkGameOver(el)){
            gameOver();
        }
        else{
            downCount++;
            changePlayer();
        }
    }
}

function changePlayer(){
    if (curPlayer == 'X'){
        curPlayer = '0';
    }
    else{
        curPlayer = 'X';
    }
    
    if(curPlayer == pcPlayer){
        makePCHod();
    }
}

function checkGameOver(el){
    
    // проверка по столбцу
    var idCol = el.id.substring(1, 2);
    var r1 = $('#1' + idCol).val();
    var r2 = $('#2' + idCol).val();
    var r3 = $('#3' + idCol).val();
    if ((r1 == r2) && (r2 == r3)){
        msg = 'Победил ' + curPlayer;
        winPlayer = curPlayer;
        return true;
    }
    
    // проверка по строке
    var idRow = el.id.substring(0, 1);
    var c1 = $('#' + idRow + '1').val();
    var c2 = $('#' + idRow + '2').val();
    var c3 = $('#' + idRow + '3').val();
    if ((c1 == c2) && (c2 == c3)){
        msg = 'Победил ' + curPlayer;
        winPlayer = curPlayer;
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
        winPlayer = curPlayer;
        return true;
    }
    if ((f13 == f22) && (f22 == f31 && (f22 != ' '))){
        msg = 'Победил ' + curPlayer;
        winPlayer = curPlayer;
        return true;
    }
    
    // Проверка на ничью
    if (downCount >= 9){
        msg = 'Ничья!';
        winPlayer = '-';
        return true;
    }
    
    return false;
}


// Искуствееный интелект
function makePCHod(){
    var el = new Object();
    el.id = getGameBox();
    console.log(el.id);
    hod(el);
}

function getGameBox(){
    if(ii.length > 0){
        console.log("Ходить по стратегии");
        // TODO предварительная проверка: является ли клетка пустой
        // Если клетка уже занята, то данная стратегия должна быть удалена из массива. 
        if(downCount == '1'){
            if( $("#" + curStrategy.h1).val() == " "){
                return curStrategy.h1;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        
        if(downCount == '2'){
            if( $("#" + curStrategy.h2).val() == " "){
                return curStrategy.h2;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        if(downCount == '3'){
            if( $("#" + curStrategy.h3).val() == " "){
                return curStrategy.h3;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        if(downCount == '4'){
            if( $("#" + curStrategy.h4).val() == " "){
                return curStrategy.h4;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        if(downCount == '5'){
            if( $("#" + curStrategy.h5).val() == " "){
                return curStrategy.h5;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        if(downCount == '6'){
            if( $("#" + curStrategy.h6).val() == " "){
                return curStrategy.h6;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        if(downCount == '7'){
            if( $("#" + curStrategy.h7).val() == " "){
                return curStrategy.h7;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        if(downCount == '8'){
            if( $("#" + curStrategy.h8).val() == " "){
                return curStrategy.h8;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        if(downCount == '9'){
            if( $("#" + curStrategy.h9).val() == " "){
                return curStrategy.h9;
            }
            else {
                console.log("Удалить стратегию");
                ii.pop();// Выталкиваем нерабочую стратегию
                if(ii.length > 0){// Если есть запасная стратегия - выбираем её
                    curStrategy = ii[ii.length - 1];
                }
                return getGameBox();
            }
        }
        
        
    }
    else{
        console.log("Заполнять пустые клетки подряд");
        if ($("#11").val() == " "){
            return '11';
            }
        if ($("#12").val() == " "){
                return '12';
            }
        if ($("#13").val() == " "){
                return '13';
            }

        if ($("#21").val() == " "){
                return '21';
            }
        if ($("#22").val() == " "){
                return '22';
            }
        if ($("#23").val() == " "){
                return '23';
            }

        if ($("#31").val() == " "){
                return '31';
            }
        if ($("#32").val() == " "){
                return '32';
            }
        if ($("#33").val() == " "){
                return '33';
            }
    }
}

function getEmptyField(){
    
}