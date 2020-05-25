/*
Print a chessboard!
Question: https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

function generateChessBoard(){
    let checkerBoard = [];
    for(let i = 1; i <= 8; i++){
        console.log(stringGenerator('#',' ',i)+'\n');
    }
}

function stringGenerator(char1,char2,iteration) {
    let lineStr = '';
    for(let i = 0; i < 4; i++){
        if(iteration % 2 == 0){
            lineStr += char2+""+char1;
        }
        else{
            lineStr += char1+""+char2;
        }
    }
    return lineStr;
}

generateChessBoard();
