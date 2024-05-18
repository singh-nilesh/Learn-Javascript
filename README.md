# Documentation for JavaScript
- **Contains basic JavaScript Required before learning React**
- In this Repo I will be uploading all the things I Find & Learn from the Internet.
- I will also create an Index, Using which Learners can navigate & Refer to.

<hr>

## Importent Points

1. **Where to Keep your `<script>` Tag**
<br>
At 'the End, inside `<Body>` Tag'. If there is an error with Your javaScript file, atleast your HTML content will be loaded first.
```html
<body>
<hl> trial </h1>
.....
...

<script src='./Path/index.js'></script>
</body>
```
- It can also be placed in `<head>` where, JS will be loaded first imporving perceived page loading speed, but can delay the rendering of the page content in cases of Large or faulty JavaScript Source.

2. **`let` vs `var`**
    - `let` is Block scope ( accessible with in specific block, eg. If-Else, While loop). Where as `Var` is Function Scope, accessible throught a function.
    - `let` is Supported into Modern JavaScript, where as `var` is supported in legacy JS as well.
    ```js
    function example() {
    if (true) {
        let y = 20;
    }
    console.log(y); // Throws ReferenceError: y is not defined
    }
    example();
    ```
    ```js
    function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10
    }
    example();
    ```

 3. You can perform various Mathematical operatons using `Math` library in JavaScript.<br> `Math.random()` is a function that generates a random Floating Point number between 0 and 1. it accepts **No Inputs**.
    ```js
    // Random Number Generator
    let min = 1;
    let max = 6;
    console.log(Math.random); // Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
    console.log(Math.floor(Math.random()*(max-min+1)+min)); // returns a random number between min and max
    ```

4. We can use variable as main comparison entity in `switch(data)`, but It's true potential is used with boolean data, `switch(true)` and the `case` statements are equivalent of `If , Else-If` conditions, eg.
    ```js
    let testScore = 72;
    let grade;

    switch(true){
        case testScore >= 90: grade = 'A';
            break;
        case testScore >= 80: grade = 'B';
            break;
        case testScore >= 70: grade = 'C';
            break;
        default : grade = 'D';
    }
    console.log(`Your Grade is ${grade}`); // returns 'C'
    ```

    