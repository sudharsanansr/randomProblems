//String destructuring

function captitalize([firstLetter,...rest]){ //destructuting the parameters as an array and assign the value of first index to the firstLetter
    console.log(firstLetter);
    console.log(rest);
    console.log(firstLetter.toUpperCase()+rest.join('')); 
}

captitalize('sudharsanan'); //sending only one parameter
captitalize('mohan raj');