// in class excercise
let prompt = require("prompt-sync")();
let userInput = Number(prompt("enter number: "));
// for(let r=1; r<=userInput; r++) {
//   for(let c = 1; c <= r; c++){
//     process.stdout.write(`${r}`);
//   }
//   console.log();
// }
// for(let r=1; r<=userInput; r++) {
//   for(let c = 1; c <= r; c++){
//     process.stdout.write(`${c}`);
//   }
//   console.log();
// }
let totalCol = 4;
let userCreatedInput = 4;
for (let r = 1; r <= 4; r++) {
  let c = 1;
  for (c = 1; c < totalCol; c++) {
    process.stdout.write(" ");
  }
  for (c = 1; c <= r; c++)
     process.stdout.write(`${r}`);

  console.log();
  totalCol--;
}
