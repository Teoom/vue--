console.log(`
  
  
  
  
  Функция mySlice
  
  
  
  `);



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'bison', "fish"];

function getNewArray(arr, start, end) {
  const newArr = [];
  let index = 0;


  for (let i = start; i < end; i++) {
    newArr[index] = arr[i];
    index++;
  }

  return newArr;
}


function mySlice(arr, start, end) {
  end = end ? end : arr.length;


  if (start > 0 && end > 0) {
    end = end ? end : arr.length;
    return getNewArray(arr, start, end);

  } else if (start > 0 && end < 0) {
    end = arr.length + end;

    return getNewArray(arr, start, end);
  } else if (start < 0 && end < 0) {
    start = arr.length + start < 0 ? 0 : arr.length + start;
    end = arr.length + end;

    return getNewArray(arr, start, end);
  } else if (start < 0) {
    start = arr.length + start < 0 ? 0 : arr.length + start;

    return getNewArray(arr, start, end);
  } else {

    return getNewArray(arr, 0, arr.length);;
  }


}


console.log("no args:", mySlice(animals));
console.log("start 2:", mySlice(animals, 2));
console.log("start 2, end 4:", mySlice(animals, 2, 4));
console.log("start -2::", mySlice(animals, -2));
console.log("start 2, end -1:", mySlice(animals, 2, -1));
console.log("start -4, end -2:",mySlice(animals, -4, -2))




console.log(`
  
  
  
  
  Функция myIndexOf
  
  
  
  `);


function myIndexOf(arr, item, from) {
  if (!from) {
    from = 0;
  }

  from < 0 ? from = arr.length + from : from;

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

console.log("tiger:", myIndexOf(animals, "tiger"));
console.log("bison:", myIndexOf(animals, "bison"));
console.log("bison from 3:", myIndexOf(animals, "bison", 3));
console.log("bison from -2:", myIndexOf(animals, "bison", -2));



console.log(`
  
  
  
  
  Функция myIncludes
  
  
  
  `);

function myIncludes(arr, item, from) {
  if (!from) {
    from = 0;
  }

  from < 0 ? from = arr.length + from : from;


  if (typeof arr === "string") {
    let newStr = "";

    for (let i = from; i < arr.length; i++) {
      newStr = arr[i];

      if (newStr === item) {
        return true;
      }

      for (let j = i + 1; j < arr.length; j++) {
        newStr += arr[j];
        if (newStr === item) {
          return true;
        }
      }

    }

    return false;
  } else {

    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return true;
      }
    }

    return false;
  }
}
console.log("elephant:", myIncludes(animals, "elephant"));
console.log("bison from -2:", myIncludes(animals, "bison", -2));
console.log("tiger:", myIncludes(animals, "tiger"));
console.log("ph:", myIncludes("elephant", "ph"));
console.log("e from -6:", myIncludes("elephant", "e", -6));
console.log("ee:", myIncludes("elephant", "ee"));