var obj = {
    dataSources : {
        dataPoints : {
            priority : 3,
            assignment_group : 'ITOM'
        },
        info:{
            owner : 'XYZ'
        }
    }
}

for(dataPoints in obj.dataSources){
    console.log(dataPoints);
}

console.log(isNaN(-10));