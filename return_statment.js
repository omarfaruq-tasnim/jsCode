// importance of return statement

function office(firstName, lastName, gender){
    var fullName;
    if (gender === "male") {
        var fullName = "Mr. "  +firstName+ " " +lastName;
    
    }

    else if (gender === "female"){
        var fullName = "Ms. "  +firstName+ " " +lastName;
     
    }
    return fullName;
}

var output = office("omar","faruq","male");
console.log (output);






// object return example....

function obj(){
    return{
    
        name:"larki",
        age:"25",
        color:"white",
        print:function(){

            console.log(this.name, this.age, this.color);
        }
    }
}

var example = obj()
console.log(example);