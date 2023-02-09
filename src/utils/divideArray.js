const divideArray = (array, divider) => {
  let arr = [];
  let j = divider;
  for (let i = 0; i < array.length; i = i + divider) {
    // console.log(i);
    // console.log(j);
    let arr1 = [];
    for (let k = i; k < j; k++) {
      array[k] && arr1.push(array[k]);
      // console.log(arr1);
    }
    arr.push(arr1);
    j += divider;
  }
  return arr;
};
export default divideArray;
