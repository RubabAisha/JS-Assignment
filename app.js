// //CHAPTER 1

// // TASK1
// alert ("Welcome Dear User!");

// // TASK2
// alert ("Error! PLease enter a valid password.");

// // TASK3
// alert("Welcome to JS Land... \n Happy Coding!");

// // TASK4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// // TASK5
// console.log("Hello... I can run JS through my web browser's console");

// // TASK6
// alert( "Welcome to my Portfolio!")

// CHAPTER2
// // TASK1
// var username;
// console.log(username);

// // TASK2
// var myName="Aisha Rubab";
// console.log(myName);

// // TASK3
// var message;
// message="Hello World";
// alert(message);

// // TASK4
// var stuName="Jhone Doe";
// var stuAge="15 years old";
// var stuCourse="Certified Mobile Application Development";
// alert(stuName);
// alert(stuAge);
// alert(stuCourse);

// // TASK5
// var a="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(a);

// // TASK6
// var email="abc@yahoo.com";
// alert("My email address is " +email);

// // TASK7
// var book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " +book);

// // TASK8
// document.write("Yah! I can write HTML content through JavaScript" +"<br>");


// // TASK9
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// CHAPTER3
// // TASK1
// var age=25;
// alert("I am " +age+ " years old.");

// // TASK2
// var userVisit=14;
// alert("You have visited the site "+userVisit+ " times");

// // TASK3
// var birthYear=1994;
// document.write("My birth year is " +birthYear+"<br>");
// document.write("Data type of my declared variable is " +typeof(birthYear)+"<br>");

// // TASK4
// var visitorName="John Doe"; 
// var productName="T-shirt";
// var Quantity=5;
// document.write( "<b>"+visitorName+"</b>" + " ordered " + "<b>" +Quantity+" "+productName+ "</b>" + "(s) on XYZ Clothing Store.");

// CHAPTER4

// TASK1
// var a, b, c;

// TASK2
// LEGAL NAME
// var userName, stuID, x, user_nickname, $userMoney; 
// ILLEGAL NAMES
// var 5month, student name, alert, 7 ; 

// TASK3
// document.write("<h1>"+"Rules for naming JS variables"+"</h1>"+"<br>");
// document.write("Variable names can only contain number, $ , letter and _ . For example" +"<b>"+ " $my_1stVariable" +"</b>"+"<br>");
// document.write("Variables must begin with a letter, $ or _. For example" +"<b>"+ " $name, _name or name" +"</b>"+"<br>");
// document.write("Variable names are case sensitive."+"<br>");
// document.write("Variable names should not be JS keywords,")

// CHAPTER5
// TASK1
// var num1=3, num2=5;
// var sum= num1 + num2; 
// document.write("Sum of " +num1+ " and " +num2+ " is " +sum +"<br>");

// // TASK2
// var sub= num1 - num2; 
// document.write("Subtraction of " +num1+ " and " +num2+ " is " +sub +"<br>");

// var mul= num1 * num2; 
// document.write("Multiplication of " +num1+ " and " +num2+ " is " +mul +"<br>");

// var div= num1 / num2; 
// document.write("Division of " +num1+ " and " +num2+ " is " +div +"<br>");

// var mod= num1 % num2; 
// document.write("Mod of " +num1+ " and " +num2+ " is " +mod +"<br>");

// // TASK3
// var num
// document.write("Value after variable declaration is: " +num +"<br>");
// num=5; 
// document.write("Initial value: "+num +"<br>" );
// num++;
// document.write("Value after increment is: " +num +"<br>");
// num=num + 7;
// document.write("Value after addition is: " +num +"<br>");
// num--;
// document.write("Value after decrement is: " +num +"<br>");
// num=num % 3;
// document.write("The remainder is : " +num +"<br>");

// // TASK4
// var ticketPrice=600;
// document.write("Total cost to buy 5 tickets to a movie is " +(ticketPrice*5)+"PKR");

// // TASK5
// document.write("<h3>"+ "Table Of 4" +"</h3>");
// var i;
// for( i=1; i <= 10; i++){
//     document.write("4 * " +i+ "=" +(4*i)+"<br>");
// }

// // TASK6
// document.write("<h3>"+ "Conversions" +"</h3>");
// var celsius= 25;
// var fahrenheit=70;
// var celFormula=( fahrenheit - 32 ) * 5 / 9;
// var fahFormula=( celsius * 9 / 5) +32;

// document.write( celsius +"<sup>"+ "o" +"</sup>" + "C is " +fahFormula+ "<sup>"+ "o" +"</sup>" + "F");
// document.write("<br>");
// document.write( fahrenheit +"<sup>"+ "o" +"</sup>" +"F is " +celFormula+ "<sup>"+ "o" +"</sup>"+ "C");

// // TASK7
// var item1=650;
// var item1_Quantity=3;
// var item2=100;
// var item2_Quantity=7;
// var dc= 100;
// document.write( "<h1>"+"Shopping Cart" +"</h1>");
// document.write("Price of item 1 is " +item1+"<br>");
// document.write("Quantity of item 1 is " +item1_Quantity+"<br>");
// document.write("Price of item 2 is " +item2+"<br>");
// document.write("Quantity of item 2 is " +item2_Quantity+"<br>");
// document.write("Shipping Charges: " +dc+"<br>");
// document.write("<br>");
// document.write("Total cost of your order is: " +((item1*item1_Quantity)+(item2*item2_Quantity)+dc));

// // TASK8
// var totalMarks=980;
// var marksObtained=804;
// var percentage = (marksObtained*100)/totalMarks;
// document.write("<h1>"+ "Marks Sheets" +"</h1>");
// document.write("Total marks: " +totalMarks +"<br>");
// document.write("Marks obtained: " +marksObtained +"<br>");
// document.write("Percentage: " +percentage +"%" );

// // TASK9
// var dollar=10; 
// var riyal=25;
// var rupee= ( dollar * 104.80) + ( riyal * 28);
// document.write("<h1>"+ "Currency in PKR" +"</h1>");
// document.write("Total currency in PKR: " +rupee +"<br>");

// // TASK10
// var num=5;
// var result= (num + 5) * 10 / 2;
// document.write("The result of the airthmetic calculations is: " +result);

// // TASK11
// var currentYear=2020;
// var birthYear=1994;
// document.write("<h1>"+ "Age Calculator" +"</h1>");
// document.write("Current Year: " +currentYear +"<br>");
// document.write("Birth Year: " +birthYear +"<br>");
// document.write( "Your age is: " +(currentYear-birthYear));

// // TASK12
// var radius=20;
// var pi=3.142;
// document.write("<h1>"+ "The Geometrizer" +"</h1>");
// document.write("Radius of a circle: " +radius +"<br>");
// document.write("The circumference is: " +(2 * pi * radius ) +"<br>");
// document.write("The area is: " +( pi * radius * radius ) +"<br>");

// // TASK13
// var snack="chocolate chip";
// var currentAge=15;
// var estimatedAge=65;
// var estimatedSnack=3
// document.write("<h1>"+ "The Lifetime Supply Calculator" +"</h1>");
// document.write("Favourite Snack: " +snack +"<br>");
// document.write("Current Age: " +currentAge +"<br>");
// document.write("Estimated Maximum Age: " +estimatedAge +"<br>");
// document.write("Amount of snacks per day: " +estimatedSnack +"<br>");
// document.write("You will need " +((estimatedAge*estimatedSnack)-(currentAge*estimatedSnack)) +" "+snack +" to last you until the ripe old age of " +estimatedAge +"<br>");

// CHAPTER 6-9
// TASK1
// var a=10;
// document.write("<h1>"+ "Results:" +"</h1>");
// document.write("The value of a is: " +a +"<br>");
// document.write("......................" +"<br>");
// document.write("The value of ++a is: " +(++a) +"<br>");
// document.write("Now the value of a : " +a +"<br>");
// document.write("<br>");
// document.write("The value of a++ is: " +(a++) +"<br>");
// document.write("Now the value of a : " +a +"<br>");
// document.write("<br>");
// document.write("The value of --a is: " +(--a) +"<br>");
// document.write("Now the value of a : " +a +"<br>");
// document.write("<br>");
// document.write("The value of a-- is: " +(a--) +"<br>");
// document.write("Now the value of a : " +a +"<br>");

// // TASK2
// var a=2; b=1;
// var result= --a - --b + ++b + b--;
//          //   1 -   0 +   1 + 1    
// document.write("<h1>"+ "Output:" +"</h1>");
// document.write("a is: " +a +"<br>");
// document.write("b is: " +b +"<br>");
// document.write("result is: " +result +"<br>");

// // TASK3
// var name= prompt("Enter your name?");
// document.write("<h1>"+"Welcome " +name +"!" +"</h1>");

// // TASK5
// var x=prompt("Enter the Number to print the table?");
// if(x==""){
//     x=5;
// }
// document.write("<h3>" +"The user entered " +x  +"</h3>");
// for( var i=1; i<=10;i++ ){
//     document.write( x +" * "+ i +" = "+ (x*i) +"<br>");
// }

// TASK6
// var sub1=prompt("Enter first subject name?");
// var sub2=prompt("Enter second subject name?");
// var sub3=prompt("Enter third subject name?");
// var sub1Marks=prompt("Enter first subject marks out of 100?");
// var sub2Marks=prompt("Enter second subject marks out of 100?");
// var sub3Marks=prompt("Enter third subject marks out of 100?");
// sub1Marks=Number(sub1Marks);
// sub2Marks=Number(sub2Marks);
// sub3Marks=Number(sub3Marks);
// var totalMarks=100;
// var total= totalMarks*3;
// var totalMarksObtained= sub1Marks + sub2Marks + sub3Marks;
// var sub1per=(sub1Marks*100)/totalMarks;
// var sub2per=(sub2Marks*100)/totalMarks;
// var sub3per=(sub3Marks*100)/totalMarks;
// var Percentage= ((sub1per + sub2per + sub3per) * 100) / 300 ; 
// document.write("<h1>"+"Table"+"</h1>");
// document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+sub1Marks+"</td><td>"+sub1per+"%"+"</td></tr><tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+sub2Marks+"</td><td>"+sub2per+"%"+"</td></tr><tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+sub3Marks+"</td><td>"+sub3per+"%"+"</td></tr><tr><td>Total</td><td>"+total+"</td><td>"+totalMarksObtained+"</td><td>"+Percentage+"%</td></tr></table>")

// CHAPTER 9-11
// TASK1
// var cityName=prompt("Enter your city name?", "City");
// cityName= cityName.toLowerCase();
// if(cityName==="karachi"){
//     alert("Welcome to city of lights");
// }

// TASK2
// var gender=prompt("Enter your gender?", "male/female");
// gender=gender.toLocaleLowerCase();
// if(gender==="male"){
//     alert("Good Morning Sir!");
// }
// else if(gender==="female"){
//     alert("Good Morning Maam!");
// }
// else{
//     alert("Good Morning!");
// }

// TASK3
// var color=prompt("Enter traffic signal color?");
// color=color.toLocaleLowerCase();
// if(color==="red"){
//     alert("Must Stop");
// }
// else if(color==="yellow"){
//     alert("Ready to move");
// }
// else if(color==="green"){
//     alert("Move now");
// }
// else{
//     alert("This is not a road traffic signal color");
// }


// TASK4
// var fuel=prompt("Enter your remaining fuel in the car in litres?");
// fuel=Number(fuel);
// if(fuel < 0.25 ){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("You are good to go");
// }

// TASK5
// a)
// var a=4;
// if(++a===5){
//     alert("given condition for variable a is true");
    
// }
// console.log("The above alert appeared");

// // b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// console.log("The above alert didn't appear");

// // c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// console.log("The above alert didn't appear");
// if (c === 13){
// alert("condition 2 is true");
// }
// console.log("The above alert appeared");
// if (++c < 14){
// alert("condition 3 is true");
// }
// console.log("The above alert didn't appear");
// if(c === 14){
// alert("condition 4 is true");
// }
// console.log("The above alert appeared");

// // d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// console.log("The above alert appeared");

// // e)
//     if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// // f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// console.log("The above alert appeared");
        
// TASK6
// var sub1Marks=prompt("Enter first subject marks out of 100?");
// var sub2Marks=prompt("Enter second subject marks out of 100?");
// var sub3Marks=prompt("Enter third subject marks out of 100?");
// sub1Marks=Number(sub1Marks);
// sub2Marks=Number(sub2Marks);
// sub3Marks=Number(sub3Marks);
// var totalMarks=300;
// var totalMarksObtained= sub1Marks + sub2Marks + sub3Marks;
// var Percentage= ((totalMarksObtained) * 100) / totalMarks ; 
// document.write("<h1>"+"Mark Sheet"+"</h1>");
// document.write( "Total Marks: " +totalMarks+"<br>");
// document.write( "Marks Obtained: " +totalMarksObtained+"<br>");
// document.write( "Percentage: " +Percentage+"%"+"<br>");
// if ( Percentage >= 80){
//     document.write( "Grade: A+"+"<br>");
//     document.write( "Remarks: Excellent");
// }
// else if ( Percentage >= 70){
//     document.write( "Grade: A"+"<br>");
//     document.write( "Remarks: Good");
// }
// else if ( Percentage >= 60){
//     document.write( "Grade: B"+"<br>");
//     document.write( "Remarks: You need to improve");
// }
// else{
//     document.write( "Grade: Fail"+"<br>");
//     document.write( "Remarks: Sorry");
// }

// TASK7
// var secretNum=5;
// var userNum= prompt("Dear user guess the secret number 1-10");
// userNum=Number(userNum);
// if ( userNum === secretNum){
//     alert("Bingo, Correct Answer");
// }
// else if( userNum === ++secretNum){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Try Again");
// }

// TASK8
// var num=prompt("Dear user enter the number?");
// num=Number(num);
// if (num % 3 == 0){
//     alert("The number is divisible by 3")
// }

// TASK9
// var num=prompt("Enter any number?");
// num=Number(num);
// if (num % 2 == 0){
//     alert("You entered Even Number");
// }
// else{
//     alert("You entered Odd Number");
// }

// TASK10
// var temp=prompt("Enter today's temperature?");
// temp=Number(temp);
// if (temp > 40 ){
//     alert("It is too hot outside.")
// }
// else if (temp > 30 ){
//     alert("The Weather today is Normal.")
// }
// else if (temp > 20 ){
//     alert("Today’s Weather is cool.")
// }
// else if (temp > 10 ){
//     alert("OMG! Today’s weather is so Cool.")
// }

// TASK11
// var firstNum=prompt("Enter your first number?");
// var secondNum=prompt("Enter your second number?");
// var operator=prompt("Enter the operation you would like to perform +, -, *, /, %")
// var result;
// firstNum=Number(firstNum);
// secondNum=Number(secondNum);
// if (operator=== "+"){
//     result= firstNum + secondNum;
//     alert(result);
// }
// else if (operator=== "-"){
//     result= firstNum - secondNum;
//     alert(result);
// }
// else if (operator=== "*"){
//     result= firstNum * secondNum;
//     alert(result);
// }
// else if (operator=== "/"){
//     result= firstNum / secondNum;
//     alert(result);
// }
// else if (operator=== "%"){
//     result= firstNum % secondNum;
//     alert(result);
// }

// CHAPTER 12-13
// TASK1 
// var character=prompt("Enter your character? Number or String");
// var item = character.charCodeAt(0);
// if( (item >= 65) && (item <= 90))
// {
//     alert("You entered a Upper Case Letter");
// }
// else if( (item >= 97) && (item <= 122) )
// {
//     alert("You entered a Lower Case Letter");
// }
// else{
//     alert("You entered a Number");
// }


// TASK2
// var num1=prompt("Enter your first num?");
// var num2=prompt("Enter your second num?");
// num1=Number(num1);
// num2=Number(num2);
// if (num1 > num2){
//     alert(num1);
// }
// else if( num2 > num1){
//     alert(num2);
// }
// else if(num1==num2){
//     alert("The two integers are equal");
// }

// TASK3
// var num=prompt("Enter your num positive, negative or zero?");
// num=Number(num);

// if (num > 0){
//     alert("The entered number is positive");
// }
// else if( num < 0){
//     alert("The entered number is negative");
// }
// else if(num===0){
//     alert("The entered number is zero");
// }

// TASK4
// var letter=prompt("Enter your letter?");
// letter=letter.toLocaleLowerCase();
// if (letter.length > 1)
// {
//     alert("You entered a word not a letter");
// }
// else if ( letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//         alert("You entered a vowel.");
//     }
// else{
//         alert("You entered a consonant.");
// }

// TASK5
// var password="hello";
// var userpassword=prompt("Enter your password?");
// if (userpassword === ""){
//     alert("Please enter your password");
// }
// else if( userpassword === password){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password!")
// }

// TASK6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// console.log(greeting);
// this is fixed parenthesis were missing

// TASK7
// var time=prompt("Enter time in 24 hours clock format like: 1900 = 7pm");
// time=Number(time);
// if(time >= 0000 && time < 1200 ){
//     alert("Good Morning User!");
// }
// else if(time >= 1200 && time < 1700 ){
//     alert("Good Afternoon User!");
// }
// else if(time >= 1700 && time < 2100 ){
//     alert("Good Evening User!");
// }
// else if(time >= 2100 && time < 2359 ){
//     alert("Good Night User!");
// }

// CHAPTER 14-16
// // TASK1
// var stuName=[];
// // TASK2
// var stuId={};
// // TASK3
// var names=["Aisha", "Hamza", "Kashaf", "Bilal"];
// // TASK4
// var num=[10,20,30,40,50,60,70,80,90,100];
// // TASK5
// var bool=[true,false];
// // TASK6
// var mixedArray = [1, "Ali", "Now is", true];
// // TASK7
// document.write("<h1>Qualifications:</h1>");
// var degree=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for ( var i=0; i < degree.length; i++)
// {
//     document.write("<p>"+degree[i]+"</p>");
// }
// TASK8
// var stuName=["Ali", "Sana", "Omar"];
// var stuScore=[320,230,480];
// for (var i=0; i < stuName.length; i++){
//     document.write("Score of " +stuName[i]+ " is " +stuScore[i]+" Percentage: " +(stuScore[i]*100)/500+"%");
//     document.write("<br>");
// }

// TASK9
var color=["red", "green", "yellow", "black", "blue", "orange"];
// for(var i=0; i < color.length; i++){
//     document.write(color[i]+"<br>");
// }

// a)
// var userColor=prompt("Enter the color name you want to add to the begining of the array?");
// color.unshift(userColor);
// document.write("<h3>Add color to the Beginning of the Array</h3>")
// for(var i=0; i < color.length; i++){
//     document.write(color[i]+"<br>");
// }

// b)
// var userColor=prompt("Enter the color name you want to add to the end of the array?");
// color.push(userColor);
// document.write("<h3>Add color to the End of the Array</h3>")
// for(var i=0; i < color.length; i++){
//     document.write(color[i]+"<br>");
// }

// c)
// var userColor1=prompt("Enter the first color name you want to add to the begining of the array?");
// var userColor2=prompt("Enter the second color name you want to add to the begining of the array?");
// color.unshift(userColor1, userColor2);
// document.write("<h3>Add two color names to the Beginning of the Array</h3>")
// for(var i=0; i < color.length; i++){
//     document.write(color[i]+"<br>");
// }

// d)
// color.shift();
// document.write("<h3>Deleting the first color in the array</h3>")
// for(var i=0; i < color.length; i++){
//     document.write(color[i]+"<br>");
// }

// e)
// color.pop();
// document.write("<h3>Deleting the first color in the array</h3>")
// for(var i=0; i < color.length; i++){
//     document.write(color[i]+"<br>");
// }

// f) 
// var userChoice=prompt("Enter the index number you want to add a color?");
// var userColor=prompt("Enter the color name you want to add?");
// userChoice=Number(userChoice);
// color.splice(userChoice, 0, userColor);
// document.write("<h3>Updated Array</h3>")
// for(var i=0; i < color.length; i++){
//     document.write(color[i]+"<br>");
// }

// g)
// var userChoice=prompt("Enter the index number you want to delete?");
// var userColor=prompt("Enter the number of colors you want to delete?");
// color.splice(userChoice, userColor);
// document.write("<h3>Updated Array</h3>")
// for(var i=0; i < color.length; i++){
//     document.write(color[i]+"<br>");
// }


// TASK10
// var arr=[320,230,480,120];
// document.write("Score of Students: " +arr +"<br>");
// var sortedArr=arr.sort(function(a, b){return a-b});
// document.write("Ordered Scores of Students:" +sortedArr);

// TASK11
// var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// var selectedCities=cities.slice(2,4);
// document.write("Cities list:<br>" +cities +"<br>");
// document.write("Selected Cities list:<br>" +selectedCities);

// TASK12
// var arr = ["This" , "is" , "my" , "cat"];
// var newarr = arr.join(" ");
// document.write("<h1>Arry:</h1>");
// document.write(arr);
// document.write("<h1>String:</h1>");
// document.write(newarr);

// TASK13
// var devices=["keyboad", "mouse", "printer", "monitor"]
// document.write("<h1>Devices: </h1>");
// for(i=0; i<devices.length;i++){
//     document.write(" "+devices[i]+"");        
// }
// var lastitem=devices.shift();
// document.write("<h3>Output: </h3>" +lastitem);

// var lastitem=devices.shift();
// document.write("<h3>Output: </h3>" +lastitem);

// var lastitem=devices.shift();
// document.write("<h3>Output: </h3>" +lastitem);

// var lastitem=devices.shift();
// document.write("<h3>Output: </h3>" +lastitem);

// TASK14
// var devices=["keyboad", "mouse", "printer", "monitor"]
// document.write("<h1>Devices: </h1>");
// for(i=0; i<devices.length;i++){
//     document.write(" "+devices[i]+"");
// }
// var lastitem=devices.pop();
// document.write("<h3>Output: </h3>" +lastitem);

// var lastitem=devices.pop();
// document.write("<h3>Output: </h3>" +lastitem);

// var lastitem=devices.pop();
// document.write("<h3>Output: </h3>" +lastitem);

// var lastitem=devices.pop();
// document.write("<h3>Output: </h3>" +lastitem);

// TASK15
// var phoneCompany=["Apple","Samsung", "Motorola", "Nokia", "Sony" ," Haier", "LG"];
// document.write("<select>")
// for (x=0; x < phoneCompany.length; x++){
//  document.write("<option>"+phoneCompany[x]+"</option>");
// }
// document.write("</select>")

// CHAPTER 17-20
// TASK1
// var Arr=[[],[],[]];

// TASK2
// var activities = [
//     [0, 1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// alert(activities);

// TASK3
// for (var i=1; i <=10; i++){
//     document.write(i +"<br>");
// }

// TASK4
// var x=prompt("Enter a number to show its multiplication table?");
// var y=prompt("Enter the length of multiplication table?");

// document.write("<h3>" +"Multiplication Table of " +x  +"</h3>");
// document.write("<h3>" +"Length " +y  +"</h3>");
// for( var i=1; i<=y;i++ ){
//     document.write( x +" * "+ i +" = "+ (x*i) +"<br>");
// }

// TASK5
// var fruits = ["apple", "banana", "mango", "strawberry", "orange"];
// document.write("<ul>")
// for(var i=0; i<fruits.length;i++){
//     document.write("<li>"+fruits[i]+"</li>");
// }
// document.write("</ul>")

// for(var j=0; j<fruits.length;j++){
//     document.write("Element at index "+j+ " is "+fruits[j]+"<br>");
// }

// TASK6
// document.write("<h3>Counting: </h3>")
// for (i=1; i<=15;i++){
//     document.write(i +",");
// }

// document.write("<h3>Reverse Counting: </h3>")
// for (i=10; i>=1;i--){
//     document.write(i +",");
// }

// document.write("<h3>Even: </h3>")
// for (i=0; i<=20;i++){
//     if (i % 2 == 0){
//         document.write(i +",");
//     }
// }

// document.write("<h3>Odd: </h3>")
// for (i=0; i<=20;i++){
//     if (i % 2 !== 0){
//         document.write(i +",");
//     }
// }

// document.write("<h3>Series: </h3>")
// for (i=1; i<=20;i++){
//     if (i % 2 == 0){
//         document.write(i +"k ,");
//     }
// }

// TASK7 BY INDEXOF METHOD  
// var bakeryItem=["cake", "apple pie", "cookie", "chips", "patties"];
// var item=prompt("Welcome to ABC Bakery. What do you want to order Sir/Maam?");
//     if(bakeryItem.indexOf(item) !==-1){
//     alert(item +" is available at index "+bakeryItem.indexOf(item)+ " in our bakery");
//     }
//     else {
//     alert("We are sorry "+item+" is not available in our bakery");
//     }
      
// TASK8
// var arr=[24,53,78,91,12]
// var largestnum=0;
// for(var i=0; i<arr.length; i++){
//     if(arr[i] > largestnum)
//     largestnum=arr[i];
// }
// document.write("Array items: " +arr);
// document.write("<br>The largest number is: " +largestnum);

    
// TASK9
// var arr=[24,53,78,91,12];
// for(var i=0; i<arr.length; i++){
//     var smallest=Math.min(arr[i]);
//  }
// document.write("Array items: " +arr);
// document.write("<br>The smallest number is: " +smallest);

// TASK10
// for (var i=1; i <=20; i++){
//         document.write( i * 5 +",");
// }
    
