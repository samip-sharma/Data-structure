function quickSort(arr){
    let index = pivot(arr)

    if( arr.length <= 1) {
        return arr
    }
    
    quickSort(left)
    quickSort(right)

}

function pivot(arr, start = 0, end = arr.length +1){
    let pivot = arr[start]
    let swapIdx = start 

    for (let i = start+1; i < arr.length ; i++){
        if (pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx ,i)
        }
    }

    function swap(arr, i ,j){
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
    }
    swap(arr, swapIdx, start)
    return swapIdx
}