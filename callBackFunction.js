// callback function

var arr= [1,2,3,4,5,6,7,8,9];
arr.forEach(function(a){
    console.log(a);
})


console.log("........../ another way / ........");

function cbf(a){
    console.log(a);
}
arr.forEach(cbf);


console.log("......../ return the function /......");

function A(name){
    return function(){
        return "my name is "+ name;
    }
}

var fullName= A("omar Faruq")();
console.log(fullName);