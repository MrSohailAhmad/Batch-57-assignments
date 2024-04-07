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

//? 6. Increment Challenge
//? Instructions: Increment a variable's value by 1 using two different methods.

let counter: number = 0;

counter++;
console.log(counter);
counter + 1;
console.log(counter);

//? 7. Logical Gates
//? Instructions: Given three Boolean variables, write expressions for AND, OR, and NOT gates.

let a_true: boolean = true,
  b_false: boolean = false,
  c: boolean = true;

let and_Expression = [
  { AND_Expression: `${a_true} AND ${c}`, value: `${a && c}` },
  { AND_Expression: `${a_true} AND ${b_false}`, value: `${a && b}` },
  { AND_Expression: `${b_false} AND ${a_true}`, value: `${b && a}` },
  { AND_Expression: `${b_false} AND ${c}`, value: `${b && c}` },
];

let or_Expression: object = [
  { OR_Expression: `${a_true} OR ${c}`, value: `${a || c}` },
  { OR_Expression: `${a_true} OR ${b_false}`, value: `${a || b}` },
  { OR_Expression: `${b_false} OR ${a_true}`, value: `${b || a}` },
  { OR_Expression: `${b_false} OR ${c}`, value: `${b || c}` },
];

let not_Expression: object = [
  { NOT_Expression: `${a_true} NOT`, value: `${!a}` },
  { NOT_Expression: `${b_false} NOT `, value: `${!b}` },
  { NOT_Expression: `${c} NOT`, value: `${!c}` },
];

console.table(and_Expression);
console.table(or_Expression);
console.table(not_Expression);

//? 8. Compound Assignment
//? Instructions: Show examples of using compound assignment operators.

let num = 10; // Use +=, -=, *=, and /= on this variable.

num += 5;
console.log("num += 5 : ", num);
num -= 5;
console.log("num -= 5 :", num);
num *= 5;
console.log("num *= 5 : ", num);
num /= 5;
console.log("num /= 5 : ", num);

// ? 9. Even or Odd
// ? Instructions: Write a program to check if a number is even or odd.

let even_or_odd_number: number = 10; // Determine if this is even or odd.

if (even_or_odd_number % 2 == 0) {
  console.log(`${even_or_odd_number} is even number`);
} else {
  console.log(`${even_or_odd_number} is odd number`);
}

even_or_odd_number = 13;

if (even_or_odd_number % 2 == 0) {
  console.log(`${even_or_odd_number} is even number`);
} else {
  console.log(`${even_or_odd_number} is odd number`);
}

// ? 10. Voting Eligibility
// ? Instructions: Check if a person is eligible to vote.

let age: number = 15; // Check if age is 18 or older to determine voting eligibility.

if (age < 18) {
  console.log(`you are Not eligible for vote`);
} else if (age >= 18) {
  console.log(`you are eligible for vote`);
}

age = 26; // change age

if (age < 18) {
  console.log(`you are Not eligible for vote`);
} else if (age >= 18) {
  console.log(`you are eligible for vote`);
}

//? 11. Grading System
//? Instructions: Assign a grade based on a numerical score.

let score: number = 85; // Assign a grade based on this score.

if (score >= 90) {
  console.log("Grade is A");
} else if (score >= 80) {
  console.log("Grade is B");
} else if (score >= 70) {
  console.log("Grade is C");
} else if (score >= 60) {
  console.log("Grade is D");
} else {
  console.log("Grade is F");
}

score = 45; // change let score: number = 45;

if (score >= 90) {
  console.log("Grade is A");
} else if (score >= 80) {
  console.log("Grade is B");
} else if (score >= 70) {
  console.log("Grade is C");
} else if (score >= 60) {
  console.log("Grade is D");
} else {
  console.log("Grade is F");
}

//? 12. Max of Three
//? Instructions: Find the maximum of three numbers.

let x = 150,
  y = 89,
  z = 2100; // Determine the largest among these.

let max: string;
if (x > y) {
  if (x > z) {
    max = `x is max value which is ${x}`;
  } else {
    max = `z is max value which is ${z}`;
  }
} else if (y > z) {
  max = `y is max value which is ${y}`;
} else {
  max = `y is max value which is ${y}`;
}

console.log(max);
