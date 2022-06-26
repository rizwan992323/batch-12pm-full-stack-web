
// How to create callback
// A callback is a function passed as an argument to another function. Using a callback,








const  message =  function(){
  console.log('shown some   time');
}
setTimeout(message,4000);


// const message = function() {  
//     console.log("This message is shown after 3 seconds");
// }
 
// setTimeout(message,4000);
//.....
//What is an Anonymous Function?
//Alternatively, we can define a function directly inside another function,  
//instead of calling it. It will look like this:

// setTimeout(function() {  
//     console.log("This message is shown after 4 seconds");
// }, 4000);


//Callback as an Arrow Function
//If you prefer, you can also write the same callback function as an ES6 arrow function,
// which is a newer type of function in JavaScript:

setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000);

// setTimeout(()=>{

// // })

// function greeeting(name){
//   alert('code kul'+name);
// }
// function process(callback){
//   var name = prompt ('Please enter your name');
//   callback(name);
// }
// process(greeeting);


function  xyz  (name,amt,city){
   alert('codekul'+name + 'enter amount'+amt +'city'+city);
}

function  string(callback){
  var name = prompt  ('Enter your name');
  var amt = prompt  ('Enter your Amount');
  var city = prompt  ('Enter your City');
  callback(name,amt,city);
}
string(xyz);






//...
// function xyz(name,amt,ok){
//   alert("enter name"+ name + '\n  Enter amount'+ amt +'done'+ ok);
// }
// function abc(callback){
//   var  name= prompt(" Enter ur name?");
//   var amt =  prompt("enter some amount");
//   var ok =  prompt("enter  okkkk");
//   callback(name,amt,ok);
// }
// abc(xyz);

// // ....
// setTimeout(()=>{
// console.log("this is a done");
// }  ,4000);
// //..
// setTimeout(function(){
// console.log("submited");
// } ,5000)

