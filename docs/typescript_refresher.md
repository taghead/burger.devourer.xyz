# Type Annotations

There are three keyworkds to minds. `let`, `const` and `var`.

- `let` used when the variable's value should be changed throughout the program. 
  - When compiled into javascript a warning during compilation stack may occur depending on the ES version read more on [Wiki](https://en.wikipedia.org/wiki/ECMAScript) and [W3Schools](https://www.w3schools.com/js/js_versions.asp). In response the compiled code will still produce valid javascript assuming the source is also sound. However, `let` may be translated to `var` for compatability reasons.
  
- `const` used when a variable's should not be changed throughout the program. 
- `var` is bad practice to use in TypeScript. **DO NOT USE** 

```typescript
// Declaring variables examples.

// Examples

// Declaring a any type variable
let flexible;       // Automatically assumes any based on the value
flexible = true;    // This is a valid value change
flexible = "pear";  // This is a valid value change
flexible = 1;       // This is a valid value change

// Declaring a number type and assigning a value simultaneously.
let count = 1;      // Automatically assumes count is a number based on the value
count = 'one';      // This will error out
count = 200;        // This is a valid value change

// Declaring a string type and assigning a value simultaneously.
let food = "pizza";  // Automatically assumes count is a string based on the value
food = 1;            // This will error out
food = "pasta";      // This is a valid value change

// There is many more but here are so some quick final examples.

let n: number;
let na: number[] = [7, 8, 9];

let b: boolean;
let ba: boolean[] = [true, false, true];

let s: string;
let sa: string[] = ['seven', 'ate', 'nine'];

let a: any;
let aa: any[] = ['It is', true, 'there were', 200, 'apples in the bag.'];

enum Size { Small = 0, Medium = 1, Large = 2 }; 
console.log(Size.Small);    // This will output 0
console.log(Size.Medium);   // This will output 1
console.log(Size.Large);    // This will output 2

enum Quantity { Few = 3, Dozen = 12 }; 
console.log(Size.Few);      // This will output 3
console.log(Size.Dozen);    // This will output 12
```

# Type Assertions

# Arrow Functions

# Interfaces

# Classes

# Constructors

# Access Modifiers

# Properties

# Modules

