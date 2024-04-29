//Exercises
// ESSENTIAL
// 1.Evaluate the following statements in the console and compare the results:

console.log(true); 
console.log(!true);
console.log(!false); 

//2.Evaluate the following statements in the console and compare the results:

console.log(true && true) 
console.log(true && false);
console.log(false && true );
console.log(false && false);

//3.Evaluate the following statements in the console and compare the results:

console.log(true || true); 
console.log(true || false );
console.log(false || true );
console.log( false || false);

//4.Evaluate the following statements in the console and compare the results:

console.log(3 > 4);  
console.log(4 > 3 );
console.log(!(4 > 3) );
console.log(4 <= 4 && 5 < 6 );
console.log(3 < 4 && 8 < 12 );
console.log(3 === 3 || 4 === 4 );
console.log(3 === 2 || 4 === 4);

//5.Evaluate the following statements in the console and compare the results:

console.log(true && (true || false));
console.log(false && (true && true) );
console.log((true || false) && (true || false) );
console.log(3 > 2 || (false && true));
console.log(4 > 5 || (2 < 3 || 3 > 5)); 

//6.Write a function called opposite that takes a boolean as parameter and returns the opposite.

let opposite = (boolean) => !boolean;
 opposite(true);

 //7.Write a function called greaterThan5 that takes two numbers as parameters and returns true if one of the numbers is greater than 5 and false if none of the numbers are greater than 5.

  let greaterThan5 = (num1, num2) => (num1>5 || num2 >5)
 console.log(greaterThan5(1, 6) );  

 //8.Write a function called allGreaterThan5 that takes two numbers as parameters and returns true if both numbers are greater than 5 and false if one or both of them is not.

let allGreaterThan5 = (num1, num2) => (num1>5 && num2>5)
console.log(allGreaterThan5(4,7));

//9.Write a function called largerThan5AndLessThan20 that takes a number as a parameter and returns true if it is larger than five and less than 20 and false if otherwise.

let largerThan5AndLessThan20 = (number) => (number>5 && number<20)
console.log(largerThan5AndLessThan20(7));

//10.Write a function called not6AndLessThan10 that takes a number as a parameter and returns true if the number is not equal to 6 and less than 10 and false if otherwise.

let not6AndLessThan10 = (number) => (number!==6 && number<10)
console.log(not6AndLessThan10(7));

//11.Write a function called largerThan3AndLessThan18 that takes three numbers as parameters and returns true if all 3 numbers are within the range and false if one or more are not.

let largerThan3AndLessThan18 = (num1, num2, num3) => num1 > 3 && num1 < 18 && num2 > 3 && num2 < 18 && num3 > 3 && num3 < 18;
console.log(largerThan3AndLessThan18(4,5,11));
console.log(largerThan3AndLessThan18(2,5,11));

//12.Write a function called cloudyAndRainy that takes two strings and returns true if it’s cloudy and rainy and false otherwise.

let cloudyAndRainy = (string1, string2) => string1==='cloudy' && string2 ==='rainy'
console.log(cloudyAndRainy('cloudy', 'rainy'));
console.log(cloudyAndRainy('cloudy','cloudy'));

//13.Write a function called weatherActivities that takes a type of weather (as a string) and returns an activity someone can do in that weather. Please include activities for at least four types of weather conditions.

let weatherActivities = (weather) => {
    switch(weather.toLowerCase()) {
        case "sunny":
            return "Go for a hike or have a picnic in the park.";
        case "rainy":
            return "Stay indoors and read a book or watch a movie.";
        case "snowy":
            return "Build a snowman or go skiing/snowboarding.";
        case "windy":
            return "Fly a kite or go windsurfing if you're near water.";
        default:
            return "Sorry, I don't have any activity suggestions for that type of weather.";
    }
 }  