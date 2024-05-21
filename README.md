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

5. Variations of `for` loop
    ```js
    // variations of for loop
    let food = ["Potato", "Tomato", "Brinjal"];

    for(let obj of food){       // 'of' in a For Loop, fetches the value
        console.log('food '+obj);
    }

    for(let index in food){     // 'in' in a For Loop, fetches the index
        console.log('food '+index);
    }
    ```

6. Spread operator, `...ArrayName` allows an iterable such as array or string to be expaded or seprated into single elements. (Unpacks elements).
    ```js
    let number = [1,2,3,4,5];
    console.log(Math.max(number)); // returns NaN, as Math.max() accepts only numbers
    console.log(Math.max(...number)); // returns 5

    let vegitable = ["Potato", "Tomato", "Brinjal"];
    let food = [...fruits, ...vegitable, 'rice', 'fish'];
    console.log(food);

    ```
7. Rest Parameters, `...ArrayName` Bundels number of arguments in as a function parameter, (**Methord Over loading**).
    ```js
    function Menu(...foods){
    console.log(foods); // prints array, containing "Pasta", "Burger", "Pizza"
    } 

    const food1 = "Pasta";
    const food2 = "Burger";
    const food3 = "Pizza";
    Menu(food1, food2, food3);
    ```

8. We and Use HTML elements in javaScript, eg.
    ```js
    // Program to store images in an Array
    const images = []
    
    for(let i = 0; i<5; i++){
        images.push(`<img src="./image_paths/${name}.png" alt="img ${name}">`)
    }
    ```

9. `arr.map()` accept a callback and applies the function to each element of an array, **returns a new array**.
    ```js
    const number = [1, 2, 3, 4, 5];
    const squares = number.map(sqr);
    console.log(squares);

    function sqr(element){
        return element**2;
    }
    ```
10. **Arrow functions** `variable (parameter) => function_code` , are a concise way to write a simple explession functons, the you use only once
    ```js
    // can't pass arguments in arrow functions, if used as callback direcly, witout declaration
    
    // setTimeout(("jhon",34) => {   --> trows Missing formal parameters error
    setTimeout(() => {      
        console.log(`Hello jhon.`);
        console.log(`you are 34 year old`);
    },3000);

    //  Or
    const sayHello = (name, age) => {console.log(`Hello ${name}.`)
            console.log(`you are ${age} year old`)};

    // setTimeout(sayHello('rj',34), 2000);  --> won't work
    setTimeout(() => sayHello("aj",32), 3000);    
    ```