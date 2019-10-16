function staircase(n) {  
    if(!isNaN(n)){
        for(let i = 1; i < n; i++){
            let iterationString = "";
            for(let j = 0; j < n; j++){
                if((n - j) <= i){
                    iterationString += "#";
                }
                else{
                    iterationString += " "; 
                }
            }
            console.log(iterationString);
        }
    }   
}

staircase(8);
