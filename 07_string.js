//*******String Indexing *********
//let name="SAYALI";

// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]); // there is no character at that index means is undefined


// console.log(name.length); //6
// console.log(name[name.length-1])// if you find the last char then use this

// onsole.log(name.at(4));

// console.log(name[-4]); //The .at() method allows you to access characters using positive and negative indexes.
// console.log(name.at(-4))

//********************** Uppercase, Lowercase and Trim   **************************************/

let name ="sayali"

console.log("Original Name:",name );

console.log("Uppercase Name:",name.toUpperCase()); 
//console.log(`Uppercase Name: ${name.toUpperCase()} `);

//Use TO Converting user input, names, or text into uppercase for consistent display or comparison. 

console.log(`Lowercase Name:${name.toLowerCase()}`);

let email='SAYALIB26@gmail.com';
console.log(`Before:${email}`);
console.log(`After:${email.toLowerCase()}`);//Comparing email addresses or usernames without case differences.

let text='  HELLO JS    '
console.log(`Before trim(): ${text}`); 
console.log(`After trim(): ${text.trim()}`)
console.log(text.trimStart());
console.log(text.trimEnd());


