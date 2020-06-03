class GetFullName{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

let obj = new GetFullName('Sudharsanan Ravichandran'); //constructor initialized
console.log(obj.name); //Gets the string this._name
obj.name = 'Mohan Raj Ravichandran'; //Sets 'Mohan Raj Ravichandran' as this._name;
console.log(obj.name); //Gets the new string this._name