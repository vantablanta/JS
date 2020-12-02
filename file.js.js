for (x = "#";
  x.length < 8;
  x += "#")
 Console.log (x);

 
function min(a,b){
  if(a<b) return a;
  else return b;
}

console.log(min(5,100));

function isEven(n){
  if (n == 0) return true;
  else if(n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
console.log(isEven(-1));

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;}
 

 
 
 
    }
 function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}}

if (age < 30) { alert('You can\'t have kids');                             
    } else if (age <= 30) { alert ("procreate");                              
    } else (age > 30) 
    { alert("you are alredy pregnant"); }

    function go(){
      alert('hi');
      alert('hi there');
    }
    go();

    function go(name, age){
      alert(name);
      alert(age);
    }
    go("Will", 34);
  //looping a triangle
  for (let line = "#"; 
  line.length <8;
  line += "#")
  console.log(line);
  // fiz buzz
  for (let n = 1;
  n <=100;
  n ++){
  let output = "";
  if (n %3 == 0) output+= "fizz";
  if (n%5 ==0) output+= "buzz";
  console.log(output || n);
  }
  //chessboard
  let size = 8;
  let board = "";

    for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) { 
      board += " ";
         } else {
      board += "#"; }}
    board += "\n";}
console.log(board);


for(let n = 1;
n <= 100;
n++){
let output= "";
if (n % 3 == 0) output+= "fizz";
if (n % 5 == 0) output+= "buzz" ;
console.log (output||n)}

function min(a,b){
  if(a<b) return a;
  else return b;
}

console.log(min(5,100));

function isEven(n){
  if (n == 0) return true;
  else if(n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
console.log(isEven(-1));

function countChar(string, ch) 
{
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) 
{
  return countChar(string, "B");
}



    

    function minion(age, height)
    {
      if(age < height) {return "You are Short" ;}
      else{return "You are a Giant" ;}
    }
    alert(minion(45,50));


    function add(age, height)
    {
      return(age+height);
    }
    alert(add(5,2));

    function go(name, age)
    {
      alert(name);
      alert(age);
    }
    go("Will", 34);

    function power(base, exponent)
    {
      return (base* exponent)
    }
    alert(power(2,10));

    
  function power(base, exponent)
  {
    return (base* exponent)
  }
  alert(power(2,10));
    

  let girl= {
    first_name: "peninah",
    last_name: "Mbugua",
    age:20,
    height: 166,
    color: "black",


  }

  let num =21;
  console.log (num ++);

  function greet (){
    console.log ("hello world!")
  }
  
  var add = function (a, b){ 
    return (a + b); 
  };

  let sequence = [1, 2, 3]; 
  console.log (sequence.toString());
  sequence.push(4); 
  sequence.push(5); 
  console.log(sequence);
  console.log(sequence.pop()); 
  console.log(sequence);

  let sequence = [1, 2, 3]; 
  console.log (sequence.toString());
  console.log(sequence.join(""));
  sequence.push(4); 

  console.log(sequence);
  console.log(sequence.shift()); 
  console.log(sequence)
  console.log(sequence);
  console.log (sequence.unshift(10));
  console.log(sequence);

  
  //object Michelle hasan array in it called favefoods.
  let Michelle ={
    salary : "200,000", // object
    favefoods: ["ugali", "rice", "chapati"], // object with a list of value(array elements)
    colors: "blue" // object
  };
     Michelle.dresscode = "dresses"
     Michelle.colors = "yellow"
console.log (Michelle.salary);
console.log(Michelle.favefoods[1]);
console.log (Michelle.dresscode);
console.log (Michelle.colors);
console.log( "pilau" in Michelle.favefoods);


Object.assign(Michelle, {hairType: "weave",
  makeup: "natural face"});

console.log(Object.keys({x: 0, y: 0, z: 2})); 

console.log(Michelle.makeup);
let John= [ "boy", "26", "black"];
console.log (typeof(John));
let y= function(){};
console.log(typeof(y));

//sample of array with objects
let foodtable =[
  {Monday:["tea", "fish"]}, {Tuesday:["chapati", "pilau"]},{Wednesday:["mokimo", 'choma'],
  uji: false}
];
console.log (foodtable);

let journal = [ {events: ["work", "touched tree", "pizza", "running", "television"], 
squirrel: false}, 
{events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], 
squirrel: false},
{events: ["weekend", "cycling", "break", "peanuts", "beer"], 
squirrel: true}, 
];
console.log(journal)

let Adriel= {Age:10};
Arianna = Adriel;
Sam = {Age:10};
console.log(Arianna == Adriel);
console.log( Sam == Adriel);
Adriel.Age= 20;
console.log (Arianna);
Adriel.height= "30 cm";
console.log (Arianna);
Arianna.houseNumber= 90;
console.log(Adriel);

const score = {visitors: 0, home: 0}; 
console.log (score.home);
score.home =2;
/*console.log (score.home);
//score = {home:5};//// this method produces a TypeError*/


let goals = {visitors: 0, home: 0}; 
//score = {home:5};
console.log(goals.home)// this doesnt work as well  */

/*var goals = {visitors: 0, home: 0}; 
score = {home:5};
console.log(goals.home)// neither does this    */

let todoList = ["cook", "clean", "shower"];
 function remember(task) { 
   todoList.push("shopping");
    return (todoList);
 };
 function getTask() {
    return todoList.shift();
 };

 function rememberUrgently(task) {
    return todoList.push(task); 
 };   
 /*console.log(remember());
 console.log(getTask());*/
 console.log(rememberUrgently());
 console.log(rememberUrgently());

 let array =[0, 1, 2, 3, 4,5]
 console.log(array.slice(0,4));


 function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
var User= {
  age:50,
  id:function(){
    return (this.age + 20)
  },
  fullName:function (name1 , name2){
    return (name1 + " " +name2)
  }
};
var double= function (){
  return (User.age *2)// You haveto introduce avriable to relate this functoion with object user
}

console.log (User.fullName("Michelle", "Njeri"));
console.log (User.id());
console.dir(User.fullName("Michelle" ,"Njeri"));
console.log (double());


/*var jina= function (name1 , name2){
  this.name= name1 +" "+ name2;
};

jina.prototype.name= function (){
 return this.name
}
var name = new jina("Vanta" , "Blanta");
console.log (name.jina());*/console
 var digit= [15,12];
 var total = add.apply("", digit);
 console.log (total);

 
 var big = function(){
   this.color= "black",
   this.size= "20"
 };
big.prototype.get_color= function (){
  return this.color}

big.prototype.productOf= function(){
  return ("this.size"  + "2 cm")

}
var Big= new big 
console.log(Big.get_color())

var body={
  color: "green",
  height: "80 cm",
  
};
var color= big.prototype.get_color.apply(body);
var height= big.prototype.productOf.apply(body);
console.log (color);
console.log (height);

 function w (a, b) {    
  if (typeof a !== 'number' || typeof b !== 'number') {        
  pop ( 'TypeError' + 'add needs numbers' )   
    }   
     return a + b;
   } ;

   var try_it = function () {
         try {        
           add("seven");    } 
           catch (e) {
                     console.log(e.name + ': ' + e.message);    } }
try_it();