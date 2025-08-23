// ফাংশনের সংজ্ঞা এবং কল করা
function functionName(parameter) {
    // Function body goes here
   return value; // Return statement
}



// ফাংশনের ভেতরে ভেরিয়েবল ডিক্লেয়ার করা
function addNumbers() {
    const a = 50; // Example variable
    const b = 30; // Another example variable
    return a + b; // Returns the sum of a and b
}
// addNumbers(a, b); // Calls the function with a and b as arguments
console.log(addNumbers()); // Outputs: 15




// ফাংশন এর বাহিরে ভেরিয়েবল ডিক্লেয়ার করা
    let x = 5; // Example variable
    let y = 10; // Another example variable
function multiplyNumbers(x, y) {
  
    return  x * y; // Returns the product of x and y

}
console.log(multiplyNumbers(x, y)); // Outputs: 50

//রিটার্ন ব্যবহার করে রেজাল্ট বাহিরে পাঠানোর ফাংশন 
function square() {
    let x = 5;
    return x * x ;
}
let result = square(); 
console.log(result);


// রিটার্ন স্টেটমেন্ট ব্যবহার ছাড়া ফাংশন
function percentageCalculation() {
    const totalMarks = 200;
    const obtainedMarks = 180;
    const  percentage = (obtainedMarks / totalMarks) * 100;
    
    console.log(`Percentage: ${percentage}%`); // Outputs: Percentage: 75%
    

}

percentageCalculation();



// ফাংশন কে ভেরিয়েবল হিসেবে রেখে কাজ করা 
// Function expression
// Function assigned to a variable
// ফাংশন এর ভিতরে ফাংশন ডিক্লেয়ার করা
// Function inside a function

let multiply = function() {
    let x = 5;
    let y =  function() {
        let y = 2;
        return y + 13; // Returns 15
    };
    return x * y();
}

console.log(multiply());



// Template string/literals ব্যবহার
function greet(name) {
    return `Hello, ${name}! Welcome to the world of JavaScript.`;
}
console.log(greet("Developer")); // Outputs: Hello, Developer! Welcome to the world of JavaScript. 


// let students = 30
// students += 20
// console.log(students)