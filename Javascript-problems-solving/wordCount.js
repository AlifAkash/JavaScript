var speech="I am a good person. Don't snore at night";
console.log(speech);
console.log("Lenght of speech:",speech.length,"Charecters");

var count=0;
for(i=0;i<speech.length;i++){
    var char=speech[i];
    if(char==" " && speech[i-1]!=" "){
        count++
    }
}
count++;
console.log("No of word in speech:",count);