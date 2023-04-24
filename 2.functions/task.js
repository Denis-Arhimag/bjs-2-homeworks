function getArrayParams(...arr) {

  if (arr.length == 0) {
    return 0;
  }

  let min = 0; 
  let max = 0;
  let avg = 5;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = +(sum / arr.length).toFixed(2);
     if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min){
      min = arr[i];
    }

    if (max === avg) {
      min = avg;
    }
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return(sum)
}

function differenceMaxMinWorker(...arr) {

  if (arr.length == 0) {
    return 0;
  }

  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let diff = max - min;

  return (diff);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length == 0) {
    return 0;
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];}
  }
  return (sumEvenElement - sumOddElement)
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  return (sumEvenElement / countEvenElement)
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    const total = func (...arrOfArr[i]);
    if (total > maxWorkerResult) {
      maxWorkerResult = total;
    }
  }
  return maxWorkerResult;
}
