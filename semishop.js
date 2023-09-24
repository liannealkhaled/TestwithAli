async function clinic (){
console.log (`WELCOME`)
const name = await takeInput (`enter your name`);
const age = await takeInput(`enter your age `);
const q1 = await takeInput(`Any history of cardiovascular events?`)
console.log (`This is a ${name}, a ${age}`)
}

clinic() 
//  helo0 
