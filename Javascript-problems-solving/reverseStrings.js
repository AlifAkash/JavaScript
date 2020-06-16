function reverseString(str){
    var reverse="";
    for( var i=0;i<str.length;i++){
        var char=str[i];
        reverse=char+reverse;
    }
    return reverse;
}
var statment="Hello alien vai brothers";
var forAlien=reverseString(statment);
console.log(forAlien);
var foodVlog="Vai khida lgse. Ki khawa jay"
var forAlien=reverseString(foodVlog);
console.log(forAlien);
