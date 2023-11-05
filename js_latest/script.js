//Hello Aishu
console.log("Hello Aishu");


var fullName="Aishwarya";
console.log(fullName);
var courseName="React JS Bootcamp";
var isLoggedIn=false;
var loggedCount=34;
var paymentMode;
console.log(paymentMode);
paymentMode="Credit Card";
console.log(loggedCount);
console.log("loggedCount");
console.log(paymentMode);
const uid="abc123";
var fullName="Aishwarya";
var email="aish@gmail.com";
var password="123456";
var confirmPassword="123456";
var courseCount=0;
var isLoggedInFromGoogle=false;
/*fullName=prompt("Enter your Name");*/
console.log(uid);
console.log("Full Name is: "+ fullName);
console.log(email);
console.log(`
    With Unique ID: ${uid}
    USer is: ${fullName}
    and his email is: ${email}
    and uses the password: ${password}
  `);

//operators
var num1=7;
var num2=6;
console.log(num1+num2);
console.log(num1*num2);
var answer=num1>num2;
console.log(answer);
/*D=(L-S)/L * 100;
a+((b*c)/d)*e*/
var sellingPrice=199
var listingPrice=799;
var discountPercent=((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount Percentage is: " +discountPercent);
displayDiscountPercentage=Math.round(discountPercent);
console.log(displayDiscountPercentage+ "% off");
var result=listingPrice>sellingPrice;
console.log(typeof result);

//conditional
var temperature;
temperature=39;
/*var result=temperature<20;
console.log(result);*/
if(temperature<20){
  console.log("it's very cold outside");
}
if(temperature<30){
  console.log("it's moderate outside");
}
else{
  console.log("it's really hot outside");
}

//conditional login
var email=true;
var facebook=false;
var google=false;
if(email || facebook || google){
  console.log("Login Success");
}

//ternary operator
var authenticated=true;
/*if(authenticated){
  console.log("show signout button");
}else{
  console.log("show login option");
}*/
authenticated ? console.log("signout button") : console.log("login");

//switch
var user="testprep";
switch (user) {
  case "admin":
     console.log("you get full access");
     break;
  case "subadmin":
     console.log("gets access to create/delete courses");
     break;
  case "testprep":
     console.log("gets access to crete/delete tests");
     break;
  case "user":
     console.log("gets access to consume content");
     break;
  default:
     console.log("trial user");
     break;
}

//coercion and falsy values
/*
undefined
null
0
''
NaN
*/
var user="2";
if(2===user){
  console.log("condition is true");
}
console.log(2+"2");

//functions
function sayHello(name){
  console.log("Hello there,Aishwarya.");
  console.log(`Hello there,${name}. How are you?`);
}
sayHello("Akshay");
sayHello("Barath");
function namasthey(){
  return "Hello in India";
}
var greetings=namasthey();
console.log(greetings);
console.log(namasthey());
var getUserRole=function(name,role){
  switch (role) {
    case "admin":
       return `${name} is admin with all access.`
       break; /*not necessary*/
    case "subadmin":
       return `${name} is sub-admin with acess to create and delete.`
    case "testprep":
       return `${name} is testprep with acess to create and delete tests.`
    case "user":
       return `${name} is a user to consume content.`
    default:
       return `${name} is a trial user.`
  }
}
console.log(getUserRole("Aishwarya","testprep"));
var getRole=getUserRole("Akshay","user");
console.log(getRole);

//context
hello();
function hello(){
  console.log("Hello");
}
if(2==="2"){
  console.log("This is true");
}
var myName="Aishwarya";
if(myName===window.myName){
  console.log("this is again a true statement");
}

//hoisting
var num=2;
function sayMe(){
  console.log("say me");
}
sayMe();
tipper("80");
function tipper(a){
  var bill=parseInt(a);
  console.log(bill+5);
}
bigTipper("200");
/*var bigTipper=function(a)*/
function bigTipper(a){
  var bill=parseInt(a);
  console.log(bill+15);
}
console.log(nameee);
var nameee="Aishwarya";
function sayNameee(){
  var nameee="Aishu";
  console.log(nameee);
}
sayNameee();
console.log(nameee);

//scope chain
var name1="Aishwarya";
console.log("Line no.191",name1);
function sayName(){
   var name1="Aishu";
  console.log("Line no. 194",name1);
  sayName2();
  function sayName2(){
    var name1="Aish";
    console.log("Line no. 198",name1);
  }
}
sayName();

//this
console.log(this);
var game="basketball";
function sayName3(){
  var name3="Aishwarya";
  console.log(this);
}
sayName3();

//array
var countries=["India","USA","Japan","Russia"];
var states=new Array("Rajasthan","Delhi","Mumbai","Assam")
console.log(states[0]);
console.log(states.length);
states[0]="Chennai";
console.log(states);
var user=["Aishwarya","aishuakshay@gmail.com",3,34,true];
console.log(user);
user.pop();
user.pop();
user.unshift("NEW VALUE");
console.log(user);
user.shift()
console.log(user);
console.log(user.indexOf(3));
console.log(user.indexOf("newyy"));
console.log(Array.from("Aishwarya"));
function isEven(element){
  if(element%2==0){
    return true;
  }
  return false;
}
console.log(isEven(2));
var result=[2,4,6,8].every(isEven);
console.log(result);
var result=[2,4,6,8].every((e)=>(e%2==0));
console.log(result);

//fill and filter in array
var testArray=[2,4,6,3,1,5,9,8];
console.log(testArray.fill(0));
console.log(testArray.fill("a",2,5));
const myNumber=[23,24,25,55,66,77,87,98];
const result1=myNumber.filter((num)=>num!=55);
console.log(result1);
