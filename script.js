//Q-1 Ans......

// const parent={
//     name:"NIYAZ ALAM",
//     display:function(){
//         console.log("I am parent element");
//     }
// }

// const child1=Object.create(parent);
// child1.surname="Niyaz30cs";
// const child2=Object.create(parent);
// console.log(`${child1.surname} and ${child1.name}`);
// console.log(child1.name);
// child2.display();


//Q-2 Ans....

// const plusGrandFather={
//     function1:function(){
//         console.log("i am plusGrandFather...!!");
//     }
// }

// const GrandFather=Object.create(plusGrandFather);

// GrandFather.function2=function(){
//     console.log("I am GrandFather..!!");
// }

// const father=Object.create(GrandFather);

// father.function3=function(){
//     console.log("I am father...!!");
// }

// const child=Object.create(father);

// child.function1();
// child.function2();
// child.function3();


//  Q-3 Ans....

// let arr=[1,2,3,4,5,6,7,8,9,10,20,30,40,50];

// let sum=arr.reduce((pre,current)=>pre+=current,0);

// console.log(sum);

//Q-4 Ans....

var obj = {
    name: "John",
    age: 30
  };
  
  var proto = {
    gender: "Male",
    occupation: "Engineer"
  };

  Object.setPrototypeOf(obj, proto);
  var props = getAllProperties(obj);
  console.log(props);


function getAllProperties(obj) {
    var props = [];
  
    props = props.concat(Object.getOwnPropertyNames(obj));
  
    var proto = Object.getPrototypeOf(obj);
    if (proto !== null) {
      props = props.concat(getAllProperties(proto));
    }
    return props;
  }