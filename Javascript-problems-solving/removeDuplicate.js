var id=[3,2,1,7,7,2,1,3,5,8,8,5,9,6,6,9,4,5,0];
var uniqueName=[];
for(i=0;i<id.length;i++){
    var element=id[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);