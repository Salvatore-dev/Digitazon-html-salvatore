function merge(arr1, arr2) {
    let array = []
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        if (arr1[i] <= arr2[j]) {
            array.push(arr1[i])
            i++
        }
        else {
            array.push(arr2[j])
            j++
        }
    }
    return array
}