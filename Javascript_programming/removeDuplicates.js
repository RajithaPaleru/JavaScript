//using Set
function removeUsingSetDuplicates(arr){
    let newArray= new Set(arr);
    return newArray
}
console.log(removeUsingSetDuplicates([1,2,2,3,3,4]))
// another way
function removeDuplicates(arr){
    let uniqueElements=[];
    for (let i=0; i<arr.length;i++){
        if(uniqueElements.indexOf(arr[i])===-1){
            uniqueElements.push(arr[i])
        }
    }
    return uniqueElements

}
console.log(removeDuplicates([1,2,2,3,3,4]))
