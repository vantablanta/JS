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