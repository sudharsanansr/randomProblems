let valArr = [];
function strangeCounter(n){

    function getValue(n){
        let arr = [];
        for(let i = n; i >= 1; i--){
            arr.push(i);
        }
        return arr;
    }

    getValue(n).forEach(function(element){
        if(valArr.length > 200){
            return;
        }
        valArr.push(element);
        if(element === 1){
            strangeCounter(n * 2);
        }
    })
}
strangeCounter(3);
console.log(valArr);