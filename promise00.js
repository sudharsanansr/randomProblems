const wait = time => new Promise((resolve) => setTimeout(resolve,time));
wait(3000).then(() => console.log('Hello!'));

setTimeout(function(){
    console.log('Hello!');
},3000);