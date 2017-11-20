function bubbleSort(array, callback) {
    var swapped;
    do {
      swapped = false;
      for(var i = 0; i < array.length; i++) {
        if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swapped = true;
        }
      }
    } while(swapped);
    return array;
  }

  function bubbleSort2(items, chart) {
    let temp = []
    var length = items.length;
      for (var i = (length - 1); i >= 0; i--) {
          //Number of passes
          for (var j = (length - i); j > 0; j--) {
              //Compare the adjacent positions
              //setInterval(swap2(), 2000)
              if (items[j] < items[j - 1]) {
                let swappedArr = swap (items, j, j-1);
                console.log(swappedArr)
                temp.push(swappedArr)
              }
          }
      }
      console.log(temp);
      return temp
}




function swap (array, i1, i2) {
    let temp = array[i1];
    array[i1]= array[i2];
    array[i2] = temp;
    let newArr = [...array];
    return newArr;
}
