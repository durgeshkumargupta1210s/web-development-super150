// redeclaration --> var -> yes, let -> no, const -> no
// reassign --> var , let --> yes,  const --> no
/*
** empty js file is a valid js file
1.the shortest js code that exist is . empty js file......
2.whenever the js code runs a global execution context(GEC) is created inside that GEC we have two phases
a.memory creation phase(MCP)
b.code execution phase (cep)
3. MCP runs when zero of line of code  is executed i.e befor the CEP phase .the role f MCP is to allocate 
memory ..
a.to all the variables 
b.to all the functions
4.the role of CEP is to execute after MCP and at to run the code line by line
5. all the js code is getting executed becoz of call stack , GEC is actually running becoz(inside) of call stack
6.when ever any function executes a new execution context is created and the newly of the newly created 
execution context is same as that of name of the function.
***7.when ever GEC is created along with that global object(window)is also created 

function is copies as it is in the code to MCP..
when the variable is stored in mcp then by default it is undefined..


 */

/*var a=100;
console.log(a);

function sam(){
    console.log("i am sam")
}
sam(); */

var a=100;
function sam(){
    var b=200;
    console.log(b);
    function lol(){
        var c=300;
        console.log(c);
    }
    lol();
}
console.log(a);
sam();


// Point 1: Shortest JavaScript code is an empty file
// An empty file has no lines of code to execute, so no output is produced.

console.log("Step 1: Start JavaScript Execution Flow"); // Output: "Step 1: Start JavaScript Execution Flow"

// Point 2: Global Execution Context (GEC) is created
// Every JavaScript program starts with the creation of a GEC.

// Point 3: Memory Creation Phase (MCP)
// During MCP, memory is allocated for all variables and functions.
// At this stage, variables are assigned undefined, and functions are stored as they are (entire function body).

console.log("Step 2: Memory Creation Phase (MCP) begins"); // Output: "Step 2: Memory Creation Phase (MCP) begins"

// Variable declarations
var x;          // Memory for x is created and initialized to undefined.
function sayHi() {
  console.log("Hello from sayHi function!");
} // Entire function sayHi is stored in memory as is.

// Point 4: Code Execution Phase (CEP)
// In this phase, code runs line by line, and values are assigned to variables.

console.log("Step 3: Code Execution Phase (CEP) begins"); // Output: "Step 3: Code Execution Phase (CEP) begins"

// Assigning values to variables during CEP
x = 10;         // Variable x now holds the value 10.
console.log("Value of x:", x); // Output: "Value of x: 10"

// Call the sayHi function
sayHi();        // Function execution creates a new execution context for sayHi

// Point 5: Call Stack
// The GEC runs inside the call stack. When sayHi is called, a new execution context is pushed onto the stack.

function outerFunction() {
  console.log("Inside outerFunction");

  // Point 6: Nested Execution Context
  function innerFunction() {
    console.log("Inside innerFunction");
  }

  // Calling innerFunction creates a new execution context for it
  innerFunction();
}

// Calling outerFunction creates a new execution context for it
outerFunction(); // Output: "Inside outerFunction" followed by "Inside innerFunction"

// Point 7: Global Object (window in browsers)
// Along with the GEC, the global object is created. In browsers, this is window.

console.log("Accessing Global Object: ", window); // Accessing global window object in browsers.
console.log("Global Object contains x:", window.x); // Output: "Global Object contains x: 10"

console.log("Step 4: End of Execution Flow"); // Output: "Step 4: End of Execution Flow"










//----------------------------------------------------------------------------------------


// Execution Flow Explanation:
// Global Execution Context (GEC): Created as the code starts execution. It consists of:

// Memory Creation Phase (MCP): Allocates memory for variables (undefined) and functions (entire function body).
// Code Execution Phase (CEP): Runs code line by line and assigns values or executes functions.
// Call Stack:

// GEC is pushed to the call stack at the start.
// Every function call creates a new execution context, pushed to the stack.
// The context is popped from the stack when the function execution completes.
// Global Object:

// Created along with GEC.
// In browsers, the window object acts as the global object.
// Variables and functions declared in global scope are added as properties of the global object. 