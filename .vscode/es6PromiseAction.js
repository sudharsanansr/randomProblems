const getDataFromServer = new Promise((resolve, reject) => {
    let dataReceived = true;
    if(dataReceived){
        resolve('Data received!');
    }
    else{
        reject('Data not received!');
    }
});

getDataFromServer.then((data) => {
    console.log('Yay, we got data.');
});

getDataFromServer.catch((error) => {
    console.log('Something went wrong!');
});