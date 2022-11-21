function sortedFrequency(arr, target) {
    const array = []

    for(let i=0; i<arr.length; i++ ) {
        if(arr[i] == target) {
            array.push(target)
        }        
    }
    
    if(array.length === 0) {
        return -1
    }else {
        return array.length
    }
    
}

module.exports = sortedFrequency