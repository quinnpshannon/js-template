console.log('Test Test Test');
let str_test = "I am a string";
let num_test = 999777;
let num = 1;
const _num = prompt('Enter your name:');
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