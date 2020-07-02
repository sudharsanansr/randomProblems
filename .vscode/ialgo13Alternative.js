function smallestCommons(arr) {
  console.log('arr : '+arr);
  arr = arr.sort((a,b) => {
    if(a < b){
      return -1
    };
    return 1;
  });

  let newArray = [];
  for(let i = arr[0]; i <= arr[1]; i++){
      newArray.push(i);
  }
  console.log('newArray : '+newArray);
  let flag = false;
  let j = arr[1];
  while(!flag){
    flag = newArray.every((item) => {
      return j % item == 0;
    });
    if(!flag){
      j++
    }
    else{
      break;
    }
  }
  console.log(j);
  return j;
}

smallestCommons([1, 5]);
smallestCommons([1, 5]);
smallestCommons([5, 1]);
smallestCommons([2, 10]); 
smallestCommons([1, 13]);
smallestCommons([23, 18]);