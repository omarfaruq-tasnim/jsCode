// nested function....




function outer(){

    function inner(){
        console.log("this is inner function");
     
    }
inner();
 console.log("this is outer function");
}

outer();



function math(a, b){

    function aa(){
        return a+b;
    }

    function bb(){
        return a-b;
    }
    function cc(){
        return a*b;
    }
    function dd(){
        return a/b;
    }

    return  aa() + bb() + cc() + dd();
}

var result = math(5,5);
console.log(result);