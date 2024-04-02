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
Strings are also Arrays! They start at 0, as they should!
*/
for(let x=0;_num[x]!=null;x++) {
console.log(_num[x]);
}