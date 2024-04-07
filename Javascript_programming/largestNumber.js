function largestNumber(arr){
    let largest=arr[0]
    for (let i=0;i<=arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest
}
console.log(largestNumber([3,8,5,1,4]))