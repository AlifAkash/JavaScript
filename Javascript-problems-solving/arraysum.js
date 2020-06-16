
/** sum all numbers in array by calling function
function getArraySum (marks){
    var sum=0;
    for(i=0; i<marks.length; i++){
        var element=marks[i];
        sum=sum+element;
    }
    return sum;
}
var marks=[45,65,87,94,36,89,74,98,65,15]
var result=getArraySum(marks);
console.log(result);
*/
var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames+name;
}
console.log(allNames);