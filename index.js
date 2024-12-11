// -------- 1st answer --------

function sumOfTwoNumbers(a,b){
    return a+b;
}
sumOfTwoNumbers(20,30);
console.log(`sum of two numbers:${sumOfTwoNumbers(20,30)}`);


console.log(" ---------------- ");

// ------- 2nd answer -------

function string(a){
    return a.toUpperCase();
}
string("venkat");
console.log(string("venkat"));


console.log(" ---------- ");



// ------ 3rd answer ------

function hii(a){
    return a;
}
var result= hii();
console.log(result);


console.log(" ----------- ");



// ------ 4th answer -----------

function isArray(arr){
    if(arr.length===0){
        console.log("The array is empty");
    }
    else{
        console.log("The array is not empty");
    }
}
isArray([]);
isArray([12,23,434]);

console.log(" ----------- ");


// ----- 5th answer ----------


function diffOfTwoNumbers(a,b){
    return(`difference of two number:${a-b}`);
}
var result=diffOfTwoNumbers(20,4);
console.log(result);

console.log(" ----------- ");



// ----- 6th answer --------


function isNameAge(name,age){
    return (`hello,${name.toUpperCase()}! you are ${age}years old...`);
}
var res=isNameAge("sai",24);
console.log(res);

console.log(" ----------- ");



// --------- 7th answer ----------

function isEvenNumber(a){
    if(a%2==0){
        console.log("It is even number");
    }
    else{
        console.log("It is odd number");
    }
}
isEvenNumber(98);
