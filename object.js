var student1={id:121, phone:54564, name:"Abir"};
var student2={id:122, phone:97898, name:"Mobin"};

//Access into properties
var phoneProp="phone";
var phoneNo1=student1[phoneProp];
var phoneNo2=student2[phoneProp];
var name1=student1.name;
var name2=student2.name;
var idNo1=student1["id"];
var idNo2=student2["id"];

//updation
student1.phone=12345;
student2["name"]="piyash";
student2[phoneProp]=98765;

console.log(student1);
console.log(student2);
console.log(phoneNo1);
console.log(phoneNo2);
console.log(name1);
console.log(name2);
console.log(idNo1);
console.log(idNo2);

