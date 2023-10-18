function reverse(){
    var str = document.getElementById("input");
   var reversedscentence= reverseWordsInSentence(str.value);
   str.value=reversedscentence;
}

function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    const reversedSentence = reversedWords.join(" ");
    return reversedSentence;
}


