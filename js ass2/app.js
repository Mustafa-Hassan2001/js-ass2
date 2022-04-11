
   
// CHAPTER 21-42
 // TASK NO 1:
// var firstName = prompt("Enter First Name:");
// var lastName = prompt("Enter Last Name");
// document.write("Hello "+firstName+" "+lastName);

// TASK NO 2:
// var input = prompt("Enter your favorite phone brand:");
// document.write("My favorite phone is: "+input);
// document.write("<br>");
// document.write("Length of string: "+input.length);

// TASK NO 3:
// var word = "Pakistani";
// document.write("String: "+word+"<br>");
// word = word.toLowerCase();
// document.write("Index of 'n': "+word.indexOf("n"));

// TASK NO 4:
// var word = "Hello World";
// word = word.toLowerCase();
// document.write("Last Index of 'l': "+word.lastIndexOf("l"));

// TASK NO 5:
// var word = "Pakistani";
// document.write("String: "+word+"<br>");
// document.write("Character at index 3: "+word[3]);

// TASK NO 6:
// var firstName = prompt("Enter First Name:");
// var lastName = prompt("Enter Last Name");
// document.write("Hello "+firstName.concat(" "+lastName));

// TASK NO 7:
// var word = "Hyderabad";
// var result = word.replace("Hyder","Islam");
// document.write("Before: "+word+"<br>");
// document.write("After: "+result);

// TASK NO 8:
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var result = message.replace(/and/g,"&");
// document.write("Before: "+message+"<br>");
// document.write("After: "+result);

// TASK NO 9:
// var value = "472"
// document.write("Value: "+value+"<br>"+"Type: "+typeof(value));
// value = parseInt(value);
// document.write("<br>Value: "+value+"<br>"+"Type: "+typeof(value));

// TASK NO 10:
// var userInput = prompt("Type anything: ");
// document.write("Before: "+userInput+"<br>");
// userInput = userInput.toUpperCase();
// document.write("After: "+userInput);

// TASK NO 11:
// var userInput = prompt("Type anything: ");
// document.write("Before: "+userInput+"<br>");
// var firstChar = userInput.slice(0,1);
// var otherChar = userInput.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// userInput = firstChar+otherChar;
// document.write("After: "+userInput);

// TASK NO 12:
// var num = 35.36;
// document.write("Value: "+num+"<br>"+"Type: "+typeof(num));
// num = num.toString();
// num = num.split('.').join("");
// document.write(num);
// document.write("<br>Value: "+num+"<br>"+"Type: "+typeof(num));

// TASK NO 13:
// var username = prompt("Enter Username: ");
// if(username.match(/[\@\.\,\!]/)===null){
//     alert(username);
// }
// else{
//     alert("Please Enter a valid username.");
// }

// TASK NO 14:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am");
// userInput = userInput.toLowerCase();
// for(var i = 0; i<A.length; i++){
// if(A[i] == userInput)
// {
// document.write(userInput+" is available at index "+A.indexOf(userInput)+" in our Bakery.");
// break;
// }
// else{
//     document.write("We are Sorry. "+userInput+" is <b>not available</b> in our Bakery");
//     break;
// }
// }

// TASK NO 16:
// var university = "University of Karachi";
// document.write("Before: "+university)
// var arr = university.split("")
// document.write("<br>After: "+arr+"<br>");
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i]+"<br>")
// }

// TASK NO 17:
// var userInput = prompt("Enter anything: ");
// document.write(userInput.charAt(userInput.length-1));

// TASK NO 18:
// var string = "The quick brown fox jumps over the lazy dog."
// document.write("Text: "+string);
// string = string.toLowerCase();
// var wordCount = string.match(/the/g).length;
// document.write("<br>There are "+wordCount+" occurrences of the word 'the'")

//====================================================== CHAPTER 26-30=====================================================

// TASK NO 1:
// var userInput = +prompt("Enter a number with decimal:");
// if(userInput>0){
// document.write("number: "+userInput);
// document.write("<br>Round off value:"+Math.round(userInput))
// document.write("<br>Floor value:"+Math.floor(userInput))
// document.write("<br>Ceil value:"+Math.ceil(userInput))
// }
// else{
//     alert("Input a positive number!");
// }

// TASK NO 2:
// var userInput = +prompt("Enter a negative floating point number:");
// if(userInput<0){
// document.write("number: "+userInput);
// document.write("<br>Round off value:"+Math.round(userInput))
// document.write("<br>Floor value:"+Math.floor(userInput))
// document.write("<br>Ceil value:"+Math.ceil(userInput))
// }
// else{
//     alert("Input a negative floating point number!");
// }

// TASK NO 3:
// var userInput = +prompt("Enter a number:");
// document.write("Absolute value of "+userInput+ " is "+Math.abs(userInput));

// TASK NO 4:
// var dice = Math.random();
// dice = (dice * 6) + 1;
// dice = Math.floor(dice);
// document.write("random dice value: "+dice);

// TASK NO 5:
// var coin = Math.random();
// coin = (coin * 2) + 1;
// coin = Math.floor(coin);
// document.write(coin);
// if(coin==1){
//     document.write("<br>Random Coin Value: Heads");
// }
// else{
//     document.write("<br>Random Coin Value: Tails");
// }

// TASK NO 6:
// var value = Math.random();
// value = (value * 100) + 1;
// value = Math.floor(value);
// document.write("Random value: "+value);

// TASK NO 7:
// var userInput = prompt("Enter your weight is kilograms:");
// userInput = parseInt(userInput);
// document.write("The weight of user is "+ userInput +" Kilograms");

// TASK NO 8:
// var value = Math.random();
// value = (value * 10) + 1;
// value = Math.floor(value);
// do{
//     userInput = +prompt("Enter a number between 1-10:");
// }while(userInput>10);
// document.write("Random Value: "+value);
// document.write("<br>Your Value: "+userInput);
// if(userInput ===value){
// document.write("<br>Congratulations You won!");
// }
// else{
// document.write("<br>Better luck next time!");
// }

//====================================================== CHAPTER 31-34=====================================================

// TASK NO 1:
// var time=new Date()
// document.write(time+"<br>")

// TASK NO 2:
// var time=new Date()
// var arr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
// var mon=time.getMonth()
// var name=arr[mon]
// document.write("current month is"+" "+name+"<br>")

// TASK NO 3:
// var time=new Date()
// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var din=time.getDay()
// var nam=dayNames[din]
// document.write("today is "+" "+ nam[0],nam[1],nam[2] +"<br>")

// TASK NO 4:
// var time=new Date()
// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var din=time.getDay()
// var nam=dayNames[din]
// if(nam==="Sunday"||nam==="Saturday"){
//     document.write("its fun day")
// }else{
//     document.write("its week day"+"<br>")
// }

// TASK NO 5:
// var time=new Date()
//  var date=time.getDate()
//  if(date<=15){
//      document.write("its first fifteen days of month")
//  }else{
//      document.write("last days of month"+"<br>")
//  }
// TASK NO 6:
// var time=new Date()
// var t=time.getTime()
// document.write(t)
// var currentDate = new Date()
// var pretime =currentDate.getTime()
// var pretimeMinu = pretime/(1000*60*60)
// document.write("<br>Minutes: "+pretimeMinu)


// TASK NO 7:
// var time = new Date()
// var hours = time.getHours()
// if (hours<12){
//     document.write("its AM")
// }else{
//     document.write("its PM")
// }


// var lastDate = new Date("Apr 1,2020")
// var lastDatemili = lastDate.getTime()
// var currentDate=new Date()
// var currentDatemili =currentDate.getTime()
// var diff=currentDatemili - lastDatemili
// var days = diff/(1000*60*60*24)
// days=Math.floor(days)
// document.write(days + " "+ "days since 1 RAMZAN")


// var newDate = new Date("Dec 31, 2020")
// var newDatemili = newDate.getTime()
// var currentDate = new Date()
// var currentDatemili = currentDate.getTime()
// var diff = newDatemili -currentDatemili 
// var seconds =diff/(1000*60*60)
// document.write(seconds)

// var date = new Date()
// date.toString()
// alert(date)
// date.setFullYear(1925)

// alert(date)

//====================================================== CHAPTER 35-38=====================================================


// function currentDate(){
// var date = new Date()
// date.toString()
// alert(date)
// }
// currentDate()


// function greet(){
//     var firstname=prompt("enter your first name")
//     var lastname=prompt("enter your last name")
//     var fullName=firstname +" "+ lastname
//     alert("Welcome to this page"+" "+ fullName)
// }
// greet()


// function add(){
//     var num1=+prompt("enter no")
//     var num2=+prompt("enter no")
//     var total = num1 + num2
//     return total
// }

// document.write("total is"+" "+ add())

// function calc(num1,num2){
//     var result=num1 -num2
//     return result
// }
// document.write(calc(7,2))

// function square(a){
//     var result=a*a
//     return result
// }
// document.write(square(+prompt("enter no")))
// function A(a=7,b=5){
//     var result = a*b 
//     return result
// }
// document.write(A())
// function A(a,b){
//     var result = a*b 
//     return result
// }
// document.write(A(5,5))

//     var arr=prompt("enter any string")
//     arr.length
//     var arr1=[]
//     for(i=arr.length;i>=0;i--){
//     arr1.push(arr[i])    
//     }
// var a=arr1.slice(0,arr1.length)
// a=a.toString()
// console.log(a)


// function calcCircumferrence(r){
//     var result=2*(22/7)*r
//     return result

// }
// document.write( calcCircumferrence(7)+"<br>")
// function square(a){
//         var result=a*a
//         return result
//     }
// function calcArea(){
//     var re9sult1 = 3.142*(square(7))
//     return result1
// }
// document.write(calcArea())


// var msg =prompt("enter any message")
// var str=msg.length
// var con =msg.slice(0,msg.indexOf(" "))
// console.log(con)
// var firstletter=con.charAt(0)
//  firstletter= firstletter.toUpperCase()
// console.log(firstletter + con.slice(1))


// function coounting(){
//     var start=+prompt("enter start no")
// var end=+prompt("enter end no")
// for(i=start;i<=end;i++){
//     document.write(i+"<br>")
// }

// }
// document.write(coounting())

//====================================================== CHAPTER 39-42=====================================================

// TASK NO 1:
// var a = 2;
// var b = 2;
// function power(a,b){
//     var result = Math.pow(a,b);
//     return result;
// }
// document.write(a+"^"+b +" = "+power(a,b));

// TASK NO 2:
// function checkLeapYear(year) {
// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//      document.write(year + ' is a leap year');
//     } else {
//         document.write(year + ' is not a leap year');
//     }
// }
// var year = +prompt("Enter a year:");
// checkLeapYear(year);

// TASK NO 3:
// function findArea( a,  b,  c) 
// {  
//     if (a < 0 || b < 0 || c < 0 || (a + b <= c) || a + c <= b ||  b + c <= a) 
//     { 
//         document.write( "Not a valid triangle"); 
//         return;
//     } 
//     let s = (a + b + c) / 2; 
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
// }  
//     let a = 3.0; 
//     let b = 4.0; 
//     let c = 5.0; 
//   document.write( "Area is " + findArea(a, b, c)); 

// TASK NO 4:
// var mark1 = +prompt("Enter Mark of Subject 1");
// var mark2 = +prompt("Enter Mark of Subject 2");
// var mark3 = +prompt("Enter Mark of Subject 3");
// function average(mark1,mark2,mark3){
//     var marks = mark1 +mark2 +mark3;
//     return marks;
// }
// function percentage(mark1,mark2,mark3){ 
//     var perc = (average(mark1,mark2,mark3)/300)*100;
//     return perc;
// }
// function mainFunction(mark1,mark2,mark3){
// average(mark1,mark2,mark3);
//     document.write("Percentage: "+percentage(mark1,mark2,mark3));
// }
//   mainFunction(mark1,mark2,mark3);
