function anagrams(str1, str2){
    let sortedArr1=str1.split("").sort().join("")
    let sortedArr2=str2.split("").sort().join("")
    return sortedArr1==sortedArr2
}
console.log(anagrams("silent","listen"))