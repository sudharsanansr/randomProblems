for(let i = 0; i < 5; i++){
    function print(){
        console.log("i "+i);
    }
    setTimeout(print,100);
}

let j;
for(j = 0; j < 5; j++){
    function print(){
        console.log("j "+j);
    }
    setTimeout(print,100);
}


(function(){
    var glideRecord = new GlideRecord('em_alert');
    glideRecord.addEncodedQuery('source=TestSource');
    glideRecord.query();
    while(glideRecord.next()){
        glideRecord.deleteRecord();
    }
})();

var alert = ["799bfd94dbb15010beb144080596192a","f59b3d94dbb15010beb144080596196c","179b7550db7150109864ac1b13961987","a0ab7518db315010e76ddb85ca96191b","b5ab3d50db7150109864ac1b139619b8","fdab3190db7150109864ac1b13961923","4babf5d4dbb15010beb1440805961934","71bb3918db315010e76ddb85ca961928","fdbbf518db315010e76ddb85ca9619e4","39ebb994dbf55010ab1041db139619a2","d13cbd58db315010e76ddb85ca96198f","c30df558db7150109864ac1b1396193b","6b6d3d54dbf15010beb1440805961975","3f6db598db7150109864ac1b139619c1","69bdb954db395010ab1041db139619eb","c26e7d5cdb7150109864ac1b1396193a"];
gs.print(alert.join('","').replace(('"'+alert[0]+'",'),''));