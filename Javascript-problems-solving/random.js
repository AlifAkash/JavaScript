var num= 2.59999;
var result1= Math.floor(num);
var result2= Math.ceil(num);
var result3= Math.round(num);

/**console.log(result1);
console.log(result2);
console.log(result3);
*/

 for(i=0; i<6; i++){
    var randomNum=Math.random()*5;
    var dice= 1+Math.round(randomNum);
    console.log(dice);
 }
 