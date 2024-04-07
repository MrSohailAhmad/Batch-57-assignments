//? Hello Variable
//? Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting: string = "Hello, World!"; // Assign "Hello, World!" to this variable and print it.

console.log(greeting);

//? 2. Basic Math
//? Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.

let num1: number = 5,
  num2: number = 9; // Assign integer values and perform arithmetic operations.

let result: number = num1 + num2; // * SUM
console.log("Sum of num1 and num2 is : ", result);

result = num1 - num2; // * Difference
console.log("Difference of num1 and num2 is : ", result);

result = num1 / num2; // * Quotient
console.log("Quotient of num1 and num2 is : ", result);

result = num1 * num2; // * Product
console.log("Product of num1 and num2 is : ", result);

//? 3. Swapping Values
//? Instructions: Swap the values of two variables without using a third variable.

let a = 1,
  b = 2;
// Swap these values without using a new variable.

console.log("Value of a", a);
console.log("Value of b", b);

(a = a + b), (b = a - b), (a = a - b);

console.log("answer ====> ");
console.log("Value of a", a);
console.log("Value of b", b);

//? Type Annotation (TypeScript)
//? Instructions: This applies to TypeScript. Create a string variable and try changing its type.

let message: string;
message = "String";

/ message = 45; /; //* Type 'number' is not assignable to type 'string'.

console.log(message);

//?  Modulus Operator
//? Instructions: Use the modulus operator to find the remainder of two numbers.

let num3: number = 9,
  num4: number = 3;

let result2: number = num3 % num4;
console.log(`Reminder of ${num3} and ${num4} is : `, result2);

num3 = 10;
num4 = 3;

result2 = num3 % num4;
console.log(`reminder of ${num3} and ${num4} is : `, result2);
