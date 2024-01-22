function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = '';
    for(let i=0;i<words.length;i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    console.log("Từ dài nhất trong chuỗi là: ",longestWord);
    console.log("Độ dài của từ dài nhất là: ",maxLength);
    
}
findLongestWord("The quick brown fox jumped over the lazy dog");