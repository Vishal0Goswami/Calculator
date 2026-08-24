const th = document.querySelector("th");
const val = [];
const num = [];


function One(){ 
    th.innerHTML += 1;
    val.push("1");
 };
function Two(){ 
    th.innerHTML += 2;
    val.push("2");
 };
function Three(){ 
    th.innerHTML += 3;
    val.push("3");
 };
function Four(){ 
    th.innerHTML += 4;
    val.push("4");
 };
function Five(){ 
    th.innerHTML += 5;
    val.push("5");
 };
function Six(){ 
    th.innerHTML += 6;
    val.push("6");
 };
function Seven(){ 
    th.innerHTML += 7;
    val.push("7");
 };
function Eight(){ 
    th.innerHTML += 8;
    val.push("8");
 };
function Nine(){ 
    th.innerHTML += 9;
    val.push("9");
 };
function Zero(){ 
    th.innerHTML += 0;
    val.push("0");
 };
 function clears(){
    th.innerHTML = "";
    val.length = 0;
    console.log(val)
 }
 // --------------------------------------------------
 function plus(){
    th.innerHTML += '+';
    val.push('+');
 }
  function minus(){
    th.innerHTML += '-';
    val.push('-');
 }
  function multiple(){
    th.innerHTML += '*';
    val.push('*');
 }
  function divide(){
    th.innerHTML += '/';
    val.push('/');
 }
 function dot(){
    th.innerHTML += '.';
    val.push('.');
 }

 function remove(){
    th.innerHTML = th.innerHTML.slice(0,-1);
    val.pop();
 }
 
 function enter(){
    th.innerHTML = calculate_nums();
    num.length = 0;
 }

function concate_numbers(){
    let num_g = 0

    if(!['-','*','/'].includes(val[0])){
      num.push('+')
    }
    for(let i=0;i<val.length;i++){
        if(val[i] == '+'){
            num.push(Number(num_g));
            num.push(val[i]);
            num_g = 0;
        }else if(val[i] == '-'){
            num.push(Number(num_g));
            num.push(val[i]);
            num_g = 0;
        }else if(val[i] == '*'){
            num.push(Number(num_g));
            num.push(val[i]);
            num_g = 0;
        }else if(val[i] == '/'){
            num.push(Number(num_g));
            num.push(val[i]);
            num_g = 0;
        }else{ 
            num_g += val[i];
        }
    }
    num.push(Number(num_g));

    return num;
}

function calculate_nums(){
   let total = 0;

   let num = concate_numbers();
   
   for(let i=0;i<num.length-1;i++){
      if(num[i] == '+'){
         total += num[i+1];
      }else if(num[i] == '-'){
         total -= num[i+1];
      }else if(num[i] == '*'){
         total *= num[i+1];
      }else if(num[i] == '/'){
         total /= num[i+1];
      }
   }
   return total;
}