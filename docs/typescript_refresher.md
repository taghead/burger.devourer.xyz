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

Some use cases of type assertions are:
- To more clearly define a variable 
- Obtain more [intellisense](https://code.visualstudio.com/docs/editor/intellisense) results. 

Lets presume we have the following, a string variable utilizing the strings `endsWith()` method. 

Here is a list of some methods a string has [w3schools](https://www.w3schools.com/js/js_string_methods.asp) [tutorialspoints](https://www.tutorialspoint.com/typescript/typescript_strings.htm).
```typescript
// Variable message assums string type
let message = 'trending';
let endsWithD = message.endsWith('d');
```

Since the code is clearly defined as a string itellisense can easily resolve all the methods associated with a string. However lets modify this to a any type.

```typescript
// Variable message assumes any type
let message;
message = 'trending';
let endsWithD = message.endsWith('d');
```
The intellisense for a string is now no longer available. Now this is where type assertion comes in, we want to specify that `message.endsWith('d')` is a string. 

Now how do we do this? 

Type assertion method 1 (Popular):

Prefix the variable with `<string>` then enclose the prefix and variable within brackets.

```typescript
// Variable message assumes any type
let message;
message = 'trending';
let endsWithD = (<string>message).endsWith('d');
```

Type assertion method 2:

Enclose the variable with brackets and then a append `as string` after the variable.

```typescript
// Variable message assumes any type
let message;
message = 'trending';
let endsWithD = (message as string).endsWith('d');
```

# Arrow Functions

The concept of arrow functions allows you to define function ins a much nicer and cleaner way.

```typescript
// Example 1 - A function that contains a single line of code can be declared on a single line
let conLog = (msg) => console.log(msg);

// Example 2 - Multiple Lines
let conLog = (msg) => {
  console.log(msg);
}

// Exmaple 3 - No Parameters 
let conLog = () => console.log("Function run");
```

# Interfaces
Interface is a structure that defines the syntax for classes or objects to follow.

```typescript

// Defining an interface
interface Player {
  name: string,
  id: number
}

// Using an interface in a function
let registerPlayer = (player: Player) => {
  //do register player stuff
}

// Passing values into a function that uses a interface
registerPlayer({
  x: "Andrew",
  y: 22131231
});

```

# Classes
Since the conecpts of interfaces and functions are highly related it is more sensible for them to be in one package. This is where classes come in handy, it allows use to define groups of variables and functions that related. 

```typescript
// Defining a class
class Player {
  name: string,
  id: number

  register(){
    //do register player stuff
  };

  toConsole(){
      //do get player suff
  }
}

```
# Objects
As a fundamental we group and pass data through objects. Lets begin by creating a object using the class made earlier.
```typescript
// Defining a class
class Player {
  name: string,
  id: number

  register(){
    //do register player stuff
    console.log('User Registered:' + this.name);
  };

  toConsole(){
      //do get player suff
      console.log('User Details:' + this.name, this.id);
  }
}

// Instantiate Player class as object playerOne.
let playerOne = new Player();

// Assign values to object class variables.
playerOne.name = "Joe";
playerOne.id = 1231;

// Utilize class object methods
playerOne.register()
playerOne.toConsole();

```

# Constructors
A constructor is a method that is called when an instance of a class is created.
```typescript
// Defining a class
class Player {
  name: string,
  id: number

  //The constructor method. name is a optional variable. This is done by adding a ? to the variables name.
  constructor(name?: string, id: number){
    this.name = name;
    this.id = id;
  }

  toConsole(){
      //do get player suff
      console.log('User Details:' + this.name, this.id);
  }
}

// Instantiate Player class as objects.
let playerOne = new Player("Joe", 1231);
let playerTwo = new Player( , 1231);

// Utilize class object methods
playerOne.toConsole();
```

# Access Modifiers
Simply put an access modifier is a keyword we can apply to a class to restrict it's access to the outside. 

There are three access modifiers: 
- Public ( Default when not specified )
- Private 
- Protected

With the current implementation of the player class we will be able to set objects values by using `playerOne.name = "Carrot"`. However, there may be some use cases where you should not allow these values to change. To disable assigning a value to the name variable outside the class lets apply the keyword private to name `  private name: string`.

```typescript
// Defining a class
class Player {
  private name: string,
  id: number

  //The constructor method. name is a optional variable. This is done by adding a ? to the variables name.
  constructor(name?: string, id: number){
    this.name = name;
    this.id = id;
  }

  toConsole(){
      //do get player suff
      console.log('User Details:' + this.name, this.id);
  }
}

// Instantiate Player class as objects.
let playerOne = new Player("Joe", 1231);

// Utilize class object methods
playerOne.toConsole();
```

To futher simplify the code we can use the constructor instead of declaring the variables.
This happens because if you prefix a constructor parameter with a access modifier. Typescript compiler will generate the `this.name = name` and variable.

```typescript
// Defining a class
class Player {
  //The constructor method. You can specify a optional variable by using ?. In this example it has been applied to name.
  constructor(private name?: string, public id: number){
  }

  toConsole(){
      //do get player suff
      console.log('User Details:' + this.name, this.id);
  }
}

// Instantiate Player class as objects.
let playerOne = new Player("Joe", 1231);

// Utilize class object methods
playerOne.toConsole();
```

# Properties
Now our implementation has a few use cases we can tackle
- We can set the name but we are unable to read the name. To work around this lets make a method that returns the name. See `getName()`.
  - This is useful when you want to give read only access to the outside.
- We are unable to use `playerOne.name = ` to redefine the name due to being private. However, we can create a method to set it instead, the benifits of this allows us to constrain the input. See `setName(value)`. Alternativly see `set Name(value)`. 
  - This is useful to allow users of the class to set values with some basic validation.
```typescript
class Player {
  constructor(private name?: string, public id: number){

  }

  getName(){
    return this.name;
  }

  setName(value){
      if (name.length > 5)
        throw new Error('Value cannot be greater than 5');

      this.name = value;
  }
}

let playerOne = new Player("Joe", 1231);
console.log(playerOne.getName());
playerOne.setName("John");
console.log(playerOne.getName());
playerOne.setName("John Doe");
```

Alternativly instead of setName(value) we can use set Name(value)
```typescript
class Player {
  constructor(private name?: string, public id: number){

  }

  getName(){
    return this.name;
  }

  // First letter of Name is capital to not conflict with name variable (case sensitive).
  set Name(value){
      if (name.length > 5)
        throw new Error('Value cannot be greater than 5');

      this.name = value;
  }
}

let playerOne = new Player("Joe", 1231);
console.log(playerOne.getName());
playerOne.Name = "John";
console.log(playerOne.getName());
playerOne.Name = "John Doe";
```


# Modules
In a real world situation it is expected larger applications to be split into multiple files. This is where modules come in. Lets appropriate two seperate files, `player.ts` and `main.ts`.

`player.ts`
```typescript
//Export keyword makes it visible to other files for import
export class Player {
  constructor(private name?: string, public id: number){

  }

  toConsole(){
    console.log(this.name + " " + this.id);
  }
}
```

`main.ts`
```typescript
//Import class
// Syntax is import { CLASSNAME } from 'RELATIVE PATH/FILENAME'.
import { Player } from './player'
let playerOne = new Player("Joe", 1231);
playerOne.toConsole();
```