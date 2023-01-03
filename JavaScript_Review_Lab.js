/*A. Q + A
    1. How do we assign a value to a variable?
        ANSWER: we assign a value to a variable by using the assignment operator (=). The process I can recall is declaration and initialize in one line.
    2. How do we change the value of a variable?
        ANSWER: it depends on the variable keyword. There's var, let, and const. -- each of them are different but to change the value you have to reassign it with the operator.
    3. How do we assign an existing variable to a new variable?
        ANSWER: just use the = operator and set it with a initialization statement.
    4. Remind me, what are declare, assign, and define?
        ANSWER: declare is when you "make" a variable by using a keyword the name of the variable, assign is when you use = and give the variable a value, define is the whole process (declare + assign) so it is now equivalent to the new thing
    5. What is pseudocoding and why should you do it?
        ANSWER: Pseudocoding is the making the algorithm without the coding language. It's like laying the steps out on how the code works in a similar wordage.
    6 What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
        ANSWER: I'm not too sure if there's a time frame to which you have to think. What works for me-- I think it's trial and error which is why commenting is very important to utilize editing out certain parts of the code. 
*/

//B. Strings
    //For all other questions that involve writing code, you can solve them via the following instructions.*/
    //1. Create a variable called firstVariable
    var firstVariable;
    //2. Assign it the value of the string "Hello World"
    firstVariable = "Hello World";
    //3. Change the value of this variable to some number
    firstVariable = 2;
    //4. Store the value of firstVariablein a new variable called secondVariable
    var secondVariable = firstVariable;
    //5. Change the value of secondVariable to any string.
    secondVariable = "greetings";
    //6. What is the value of firstVariable?
    //ANSWER: the value of firstVariable is 2 because it the memory it's still stored as 2 for firstVariable
    //7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
    //ex: Hello, my name is Jean Valjean
    var yourName = "Nina";
    var yourNameSentence = "Hello, my name is " + yourName;

//C. Booleans
    //Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
    const a = 4;
    const b = 53;
    const c = 57;
    const d = 16;
    const e = 'Kevin';

    console.log(a < b);
    console.log(c > d);
    console.log('Name' == 'Name');
//***Idk what this is? 
    // FOR THE NEXT TWO, USE ONLY && OR ||
    console.log(true || false);
    console.log(false || false || false || false || false || true);
//***We want to print true in console? So all of these options have
//***to be correct?
    console.log(false == false)//***No semicolon in the given code?
    console.log(e == 'Kevin');
    console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//***I don't know how to do this tbh because it does it through order of operations? Is it double equals?
    console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
    console.log(48 != '48');//***This is a different data type integer vs string so I need to put not equals to make it "true"


//D. The farm
    //1. Declare a variable animal. Set it to be either "cow" or     
    //something else
    var animal = "cow";
    //2. Write code that will print out "mooooo" if the it is equal to cow
    if (it = "cow") {
    console.log("mooooo");
    }
    //3. Change your code so that if the variable animalis anything other   //than a cow, it will print "Hey! You're not a cow."
    if (it = "cow") {
    console.log("mooooo");
    }
    else {
    console.log("Hey! You're not a cow.");
    }
    //4. Commit


//E. Driver's Ed
    //1. Make a variable that holds a person's age; be semantic
    var personsAge;
    //2. Write code that will print out "Here are the keys!", if the age
    //16 years or older, or, if the age is younger than 16, a message       //should print "Sorry, you're too young."
    if (personAge >= 16) {
    console.log("Here are the keys!");
    }
    else {
    console.log("Sorry, you're too young.");
    }

//II. Loops
    //Remember: USE let when you initialize your for loops!
    //This is GOOD: for(let i = 0; i < 100; i++)
    //This is NO GOOD: for(i = 0; i < 100; i++)

//A. The basics
    //1. Write a loop that will print out all the numbers from 0 to 10,    //inclusive
    for(let n = 0; n < 10; n++){
    console.log(n);
    }
    //2. Write a loop that will print out all the numbers from 10 up to    //and including 400
    for(let n = 10; n <= 400; n++){
    console.log(n);
    }
    //3. Write a loop that will print out every third number starting      //with 12 and going no higher than 4000
    for (n = 10; n < 4003; n += 3){
	    console.log(n);
    };

//B. Get even
    //1. Print out the numbers that are within the range of 1 - 100
    for (let n = 1; n < 100; n++){
        console.log(n);
    };
    //2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    for (let n = 1; n < 102; n += 2){
        console.log(n + " is an even number");
    };

    //C. Give me Five
    //1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
    //Example Output:
    //I found a 5. High five!
    //I found a 10. High five!
    for(let n = 0; n<=100; n++){
        if (n % 5 = 0){
            console.log("I found a " + n + ". High five!");
        }
    }
    //1. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
    //Example Output:
    //I found a 3. Three is a crowd
    //I found a 5. High five!
    //I found a 6. Three is a crowd
    //I found a 9. Three is a crowd
    //I found a 10. High five!

    for (let n = 1; n < 101; n++){
        if (0 == n % 5 && nested % 3 == 0){
            console.log("I found a " + c + ". High five!");
            console.log("I found a " + c + ". Three is a crowd");
        } else if (n % 5 == 0){
            console.log("I found a " + c + ". High five!");
        } else if (n % 3 == 0){
            console.log("I found a " + c + ". Three is a crowd");
        }
    };    //For numbers divisible by both three and five, be sure your code prints both messages
    
//D. Savings account
    //1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    //Check your work! Your bank_account should have $55 in it.
    let bank_account = 0;
    for (let m = 1; m < 11; m++){
	bank_account += m;
    };
    console.log(bank_account);
    bank_account = 0;
    for (m = 1; m < 101; m++){
	bank_account += m * 2;
    };
    console.log(bank_account);
    //2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
    //Check your work! Your bank_account should have $10,100 in it.
    let bank_account = 0;
    for (let m = 1; m < 11; m++){
        bank_account += d;
    };
    console.log(bank_account);
    bank_account = 0;
    for (m = 1; m < 101; m++){
        bank_account += d * 2;
    };
    console.log(bank_account);

/*A. Talk about it:
1. What are the things in an array called?
    ANSWER: The things in an array are called elements.
2. Do Arrays guarantee those things will be in order?
    ANSWER: They are ordered. Each element has a value (doesn't have to be unique) but is in order and separated according to indexes.
3. What real-life thing could you model with an array?
    ANSWER: You can model lists with an array. We used a movie list in our slides/class example.*/

//B. Easy Does It
    //Create an array that contains three quotes and store it in a variable called quotes
    const quotes = ["When life gets you down, you know what you gotta do? Just keep swimming.", "Mine.", "Fish are friends, not food."];


//C. Accessing elements
    //Given the following array const randomThings = [1, 10, "Hello", true]
    
    //1. How do you access the 1st element in the array?
        randomThings[0]; //*** Because of Zero based Indexing
    //2. Change the value of "Hello" to "World"
        randomThings[2] = "World";
    //3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
        randomThings;

//D. Change values
    //Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

    //1. What would you write to access the 3rd element of the array?
        ourClass[2];
    //2. Change the value of "Github" to "Octocat"
        ourClass[4] = "Octocat";
    //3. Add a new element, "Cloud City" to the array
        ourClass.push("Cloud City");

//E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

    //Given the following array: const myArray = [5, 10, 500, 20]

    //1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
        myArray.push("Aegon", "Another String");
    //2. Remove the 5 from the beginning of the array.
        myArray.shift();
    //3. Add the string "Bob Marley"to the beginning of the array.
        myArray.unshift("Bob Marley");
    //4. Remove the string of your choice from the end of the array.
        myArray.pop();
    //5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
        //ANSWER: Yes I did mutate the array. Mutating an array means: basically changing the array itself w/o making a whole new array w/ the new changes. .reverse()method just flip-flopped my array.



//F. Biggie Smalls
    //Create a variable that contains an integer.
        let randomNumber = 2;
    //Write an if ... elsestatement that:
    //1. console.log()s "little number" if the number is entered is less than 100
    //2. console.log()s big number if the number is greater than or equal to 100.
    //*** Forgot to put quotes on big number? */
        if (randomNumber < 100){
            console.log("little number");
        } else {
            alert("big number");
        }

//G. Monkey in the Middle
    //Write an if ... else if ... elsestatement:

    //1. console.log()little numberif the number entered is less than 5.
    //2. If the number entered is more than 10, log big number.
    //3. Otherwise, log "monkey".
        let monkeyNumber = 2;
        if (monkeyNumber < 5){
            console.log("little number");
        } else if (monkeyNumber > 10){
            console.log("big number");
        } else {
            console.log("monkey");
        }   

//H. What's in Your Closet?
        //Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
        
        /*const kristynsCloset = [
          "left shoe",
          "cowboy boots",
          "right sock",
          "GA hoodie",
          "green pants",
          "yellow knit hat",
          "marshmallow peeps"
        ];*/
        
        // Thom's closet is more complicated. Check out this nested data structure!!
        /*const thomsCloset = [
          [
            // These are Thom's shirts
            "grey button-up",
            "dark grey button-up",
            "light blue button-up",
            "blue button-up",
          ],[
            // These are Thom's pants
            "grey jeans",
            "jeans",
            "PJs"
          ],[
            // Thom's accessories
            "wool mittens",
            "wool scarf",
            "raybans"
          ]
        ];*/

        //1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
            console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
        //2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
            kristynsCloset.splice(5, 0, "raybans");
        //3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
            kristynsCloset[4] = "stained knit hat";
        //4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
            thomsCloset[0][0];
        //5. In the same way, access one item from Thom's pants array.
            thomsCloset[1][0];
        //6. Access one item from Thom's accessories array.
            thomsCloset[2][0];
        //7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
            console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + " and " + thomsCloset[2][0] + "!");
        //8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
            thomsCloset[1][2] = "Footie Pajamas";


//IV. Functions


//A. printGreeting
        //Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
            
        //Like so?
            
            //console.log(printGreeting("Slimer"));
            //=> Hello there, Slimer!
            
            //You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
            I shall skip this problem-- thank you kindly :D

//B. printCool
        //Write a function printCoolthat accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

            //console.log(printCool("Captain Reynolds"));
            //=> "Captain Reynolds is cool";
            const printCool = (person) => {
                return person + " is cool";
            };
            console.log(printCool("Captain Reynolds"));

//C. calculateCube
        //Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
            
            //console.log(calculateCube(5));
            //=> 125
            const calculateCube = (singleNumber) => {
                return singleNumber * singleNumber * singleNumber;
            };
            console.log(calculateCube(5));

//D. isVowel
        //Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
            
            //console.log(isVowel("a"));
            //=> true
            const isAVowel = (character) => {
                if (character == "a" || character == "A" || character == "e" || character == "E" || character == "i" || character == "I" || character == "o" || character == "O" || character == "u" || character == "U"){
                    return true;
                } else {
                    return false;
                }
            };

//E. getTwoLengths
        //Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
            
            //console.log(getTwoLengths("Hank", "Hippopopalous"));
            //=> [4, 13]
            const getTwoLengths = (str1, str2) => {
                const lengthArray = [str1.length, str2.length];
                return lengthArray;
            };
            console.log(getTwoLengths("Hank", "Hippopopalous"));


//F. getMultipleLengths
        //Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
            
            //console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
            //=> [5, 4, 2, 2, 4]
            const getMultipleLengths = (strArr) => {
                const multipleLengthArray = [];
                for (n = 0; n < strArr.length; n++){
                    multipleLengthArray.push(strArr[n].length);
                };
                return multipleLengthArray;
            };
            console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G. maxOfThree
        //Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

        //console.log(maxOfThree(6, 9, 1));
        //=> 9

        //Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
        const maxOfThree = (number1, number2, number3) => {
	    const threeNumArray = [number1, number2, number3];
	    threeNumArray.sort(function(a, b){return a - b});
	    return threeNumArray[2];
        };
        console.log(maxOfThree(6, 9, 1));

//H. printLongestWord
        //Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

        //console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
        //=> "Peanutbutter"
        const printLongestWord = (strArray) => {
	    let longestWord = '';
	    for (let g = 0; g < strArray.length; g++){
		if (strArray[g].length > longestWord.length){
			longestWord = strArray[g];
		}
	    };
    	return longestWord;
        };
        console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//Objects
        //Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


//A. Make a user object
    //Create an object called user.
    //Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
        const user = {
	    name: "Anadult",
	    age: 18,
	    email: "Anadult123@gmail.com"
        purchased: [],
        };

//B. Update the user
    //Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
        user.email="Anadult1234@gmail.com"
    //Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
        user.age += 1

//C. Adding keys and values
    //You have decided to add your user's location to the data that you want to collect.
        user.location = "Philadelphia, Pennsylvania"
    //Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
    
    
    
//D. Shopaholic!
    //Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
        user.purchased.push("carbohydrates")
    //Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
        user.purchased.push("peace of mind" )
    //Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
        user.purchased.push("Merino jodhpurs" )
    //Console.log just the "Merino jodhpurs" from the purchasedarray.
        console.log("Merino jodhpurs")

    
    
//E. Object-within-object
    //Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
    
    //If we want to give our user a friendwith a nameand age, we could write:
    
    //user.friend = {
        //name: "Grace Hopper",
        //age: 85
    //}
    //When we console.log user, we would see the friendobject added to our user object.
    
    //Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
    //Console.log just the friend's name
    //Console.log just the friend's location
    //CHANGE the friend's age to 55
    //The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
    //The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
    //Console.log just "A latte" from the friend's purchasedarray.
    
        user.friend = {
            name: "Aminor",
            age: 17,
            location: "Philadelphia, Pennsylvania",
            purchased:[],
        }
        
        console.log(user.friend.name)
        console.log(user.friend.location)
        user.friend.age = 55
        console.log(user.friend.age)
        user.friend.purchased.push("The One Ring", "A latte")
        console.log(user.friend.purchased)
        console.log(user.friend.purchased[1])
    
//F. Loops
    //Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
        const userPurchased = () => {
            for (let i = 0; i < user.purchased.length; i++) {
                console.log(user.purchased[i])
            }
        }
        userPurchased()
    //Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
        const friendPurchased = () => {
            for (let i = 0; i < user.friend.purchased.length; i++) {
                console.log(user.friend.purchased[i])
            }
        }
        
        friendPurchased()
    
    
//G. Functions can operate on objects
    //Write a single function updateUserthat takes no parameters. When the function is run, it should:
    //it should increment the user's age by 1
    //make the user's name uppercase
    //The function does not need a returnstatement, it will merely modify the user object.
        const updateUser = () => {
            user.name= user.name.toUpperCase()
            user.age += 1;
        }
        console.log(user)
    //Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
        const updateUser2 = (obj) => {
            obj.name = obj.name.toUpperCase();
            user.age += 1;
        }
        updateUser2(user)
        console.log(user)
        
//Hungry for more == Optional? 
