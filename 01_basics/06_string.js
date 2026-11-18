let name1="sayali";
let name2="sathe";
let a='ABB'
// console.log(a)
// console.log(name1,name2)
// console.log(`Hello ${name1} ${name2}, Welcome to JS World`); 

// // backtick sign is used int string (``) you find this above the tab button
console.log(`Hello ${name1 + name2}, Welcome to JS World`); 

 //3 way to declare string 
 // using Backtick create in template literals support to variable interpolotion , multiline string 
  //Template Literals
  let name="Sayali";
  console.log(`Helloo Sayali`)

//Variable Interpolation
let name="Sayali";
let co="JS";
console.log(`Helloo ${name}, Your course is ${co}.`) //Helloo Sayali, Your course is JS.

Multiline String
let msg=`Hello sayali
Nice to Meet You
God's Opens your success Doors
`
console.log(msg) 
Hello sayali
Nice to Meet You
God's Opens your success Doors`

/*************************** *********************************/
// let text ="Hello JavaScript Developer";
// let result = text.replaceAll(" ","-");//Replaces all matching occurrences
// let result1 = text.replace("","-----"); //Replaces the first matching occurrence when using a string search value
// console.log(result);
// console.log(result1);

//***Remove all whitespace, including tabs and newlines****/
let text ="Hello JavaScript Developer";
let result = text.replace(/\s/g, "");
console.log(result);

