function myName(name){
    return 'hello, ' + name;
}

// this is function call
var x= myName();
console.log(x);


// this is referance call
var fun= myName; 


var arr = [1,2,3,4,5,6,7];
arr.push(fun);
console.log(arr);

const persone = {
    name: "omar fARUYQ",
    age: "25",
    fuuu:fun,
    coolor: "black"
};
console.log("this is object formate",persone);





