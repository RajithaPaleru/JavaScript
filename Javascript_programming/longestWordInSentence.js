function longestWordInSentence(sentence){
    let longest= "";
    let words=sentence.split(" ")
    for(let word of words){
        if(word.length > longest.length){
            longest=word;
        }
    }
    return longest;
}
console.log(longestWordInSentence("I am a software Engineer"))