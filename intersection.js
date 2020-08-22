function intersection(nums1, nums2) {
  // fill this in
  let result = [];
  nums1.forEach((el,index) => {
      if(nums2.includes(el)){
        result.push(el);
      }
  });
  
  return result.filter((el,index) => {
    return result.indexOf(el) == index;
  });
}

console.log(intersection([1,2,1], [1,2,2,1]));
console.log(intersection([4,9,5], [9,4,9,8,4]));
console.log(intersection([6,0,12,10,16],[3,15,18,20,15]))
console.log(intersection([1,5,2,12,6],[13,10,9,5,8]));
console.log(intersection([4,17,4,4,15,16,17,6,7],[15,2,6,20,17,17,8,4,5]));
console.log(intersection([3],[15]));
console.log(intersection([2,16,8,9],[14,15,2,20]));