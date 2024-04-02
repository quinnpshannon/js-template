console.log('Test Test Test');
let str_test = "I am a string";
let num_test = 999777;
let num = 1;
const _num = 'Banana'//prompt('Enter your name:');
while(num<100){
    console.log(num);
    num = num*2;
}
for(let x=1;x<10;x++){
    console.log(x);    
}
console.log(str_test);
console.log(_num);
//_num = _num+_num; //This will throw an error. It is on purpose!
console.log(_num+_num);
console.log(typeof str_test); //This show what the data type of the variable is
/*
INCREMENTERS WORK!
++ -- += -= /= *= %=
*/
//Position matters! ++counter is different than counter++
let newNum = 9;
let curNum = newNum++; //curNum is 9, then newnum get bigger after setting curNum
console.log("curNum: "+curNum+" newNum "+newNum);
curNum = ++newNum; //Both curNum and newNum are 11
console.log("curNum: "+curNum+" newNum "+newNum);
/*
ALL THE OPERATORS WORK! > < >= <= == !=
*/
/* == can be weird. If the comparators are different types,
It will try to make them the same
*/
let isEqual = 3 == "3";
console.log(isEqual);
/* === compares Value and Types
*/
isEqual = 3 === "3";
console.log(isEqual);

/*
LOGIC OPERATORS ARE THE SAME LETS GOOOOOOO
&& || and !
*/
curNum=15;
console.log(curNum);
console.log(newNum);
while(newNum==curNum || curNum>newNum){
    console.log("curNum: "+curNum+" newNum "+newNum);
    console.log("More or Equal");
    curNum--;
}
curNum=2;
while(curNum<newNum){
    if(newNum==curNum && curNum>5){
        console.log("curNum: "+curNum+" newNum "+newNum);
        console.log("Equal AND more than 5");
        curNum--;
        newNum--;
    }
    else{
        curNum++;
        console.log(curNum);
    }
}
console.log("curNum: "+curNum+" newNum "+newNum);
/*
+ concatenates strings. But we can see that above. Working as intended
Strings are also like Arrays! They start at 0, as they should!
*/
for(let x=0;_num[x]!=null;x++) {
console.log(_num[x]);
}
// We gotta use a method (a Function of an Object) to modify strings.
// We have not learned methods just yet. We will do that later.
// actually, he taught us one.
const lowerTest = 'TeStInG';
console.log(lowerTest);
console.log(lowerTest.toLowerCase());

// Comparing Strings! Letters are alphabetical and Caps sensative
// A<a<B<b<C<c etc

const a = "a";
const A = "A";
const b = "b";
console.log(a < b); // true
console.log(a < A); // false
console.log(A < b); // true

// You can use this with Longer Strings too!
console.log("Hey vs hey: "+("Hey" == "hey")); // false! Caps different and matter!

// Escape Characters let you "Cancel out" characters that might mess with your code
// They also let you add other punctuation where it might not otherwise be.
// the escape character is \ and depding on what you add, it gives different functionality.
// \n is Newline \t is Tab \b is Backspace
// Big ones are \' and \" which let you use single (and double) quotes in a string.

console.log("\"Hey\" vs \"hey\": "+("Hey" == "hey"))

// This is me messing around with things we haven't learned yet.
let babyArray = [];
for(let x=0;x<10;x++) {
    babyArray[x] = x;
}
console.log(babyArray);