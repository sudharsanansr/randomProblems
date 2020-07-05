/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/

function checkCashRegister(price, cash, cid) {
  let remainder = cash - price;
  console.log(remainder);
  let valueSet = [
      {
          type : 'PENNY',
          value : 0.01
      },
      {
          type : 'NICKEL',
          value : 0.05
      },
      {
          type : 'DIME',
          value : 0.1
      },
      {
          type : 'QUARTER',
          value : 0.25
      },
      {
          type : 'ONE',
          value : 1
      },
      {
          type : 'FIVE',
          value : 5
      },
      {
          type : 'TEN',
          value : 10
      },
      {
          type : 'TWENTY',
          value : 20
      },
      {
          type : 'ONE HUNDRED',
          value : 100
      }
  ]

  valueSet.sort((a,b) => {
      if(a.value > b.value){
          return -1;
      }
      return 1;
  });

  let cidObj = cid.reduce((initialValue,item) => {
      if(typeof initialValue[item[0]] == 'undefined'){
          initialValue[item[0]] = item[1];
      }
      return initialValue;
  },{});

  let relevantItem = valueSet.filter(item => item.value < remainder);

  console.log(cidObj);
  console.log(relevantItem);

  let tempRemainder = remainder;

  let returnObj = {};
  returnObj.status = '';
  returnObj.change = [];

  for(let i = 0; i < relevantItem.length; i++){
      let tempArray = [];
      if(tempRemainder > 0){
        if(tempRemainder % relevantItem[i].value == 0){
            tempArray[0] = relevantItem[i].type;
            tempArray[1] = (relevantItem[i].value * (tempRemainder / relevantItem[i].value));
        }
        else{
            tempRemainder = tempRemainder - (tempRemainder / relevantItem[i].value);
            tempArray[0] = relevantItem[i].type;
            tempArray[1] = (relevantItem[i].value * (tempRemainder / relevantItem[i].value));
        }
        console.log(tempRemainder);
        returnObj.change.push(tempArray);
      }
  }

  console.log(returnObj);
}

checkCashRegister(19.5, 20, [["PENNY", 1.01],["NICKEL", 2.05],["DIME", 3.1],["QUARTER", 4.25],["ONE", 90],["FIVE", 55],["TEN", 20],["TWENTY", 60],["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);