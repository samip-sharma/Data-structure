function mergeSort(arr){
    if (arr.length <=1 ) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


function merge(left, right){
    let result=[]
    let i= 0,
        j=0;
    while(left.length > i && right.length > j ){
        if(left[i] > right[j]){
            result.push(right[j])
            j++
        }else{
            result.push(left[i])
            i++
        }
    }
    while (i < left.length ){
        result.push(left[i])
        i++
    }
    while (j < right.length ){
        result.push(right[j])
        j++
    }

    return result

}