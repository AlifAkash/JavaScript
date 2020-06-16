var marks=[45,65,87,94,36,89,74,98,65,15]
var heights=marks[0];
for(i=0; i<marks.length; i++){
    var element=marks[i];
    if(heights<element){
        heights=element;
    }
}
console.log("Heights marks is:",heights);