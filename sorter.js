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
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                //Swap the numbers
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
                chart.update()
            }
        }
    }
}

  function swap (array, i1, i2) {
    let temp = array[i1];
    array[i1]= array[i2];
    array[i2] = temp;
}



function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

function swap (array, i1, i2) { 
  let temp = array[i1]; 
  array[i1]= array[i2]; 
  array[i2] = temp; 
}
