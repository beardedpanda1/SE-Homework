const attackButton = document.getElementById("attackButton");
displayUserHull = document.getElementById("hull")
displayUserFirePower = document.getElementById("fire power")
displayUserAccuracy = document.getElementById("accuracy")
displayEnemyHull = document.getElementById("enemy hull")
displayEnemyFirePower = document.getElementById("enemy fire power")
displayEnemyAccuracy = document.getElementById("enemy accuracy")

let prompt = require("prompt-sync")()
let enemyCount = 7
const user = {
  hull: 20,
  firePower: 5,
  accuracy: 0.7,
  isOperable: true,

  attack(alien) {
    let message1 = ` `;
    displayMessage(message1)
    let toHit = Math.random();
    let userInput1 = prompt(`Do you want to attack or retreat?`);
      if(enemyCount > 0){
        if (userInput1.toLowerCase() == `attack`) {
          if (this.accuracy > toHit) {
            alien.hull = alien.hull - this.firePower;
            if (alien.hull > 0) {
              message1 = `Enemy has ${alien.hull} hull point(s) left.`;
            //if alien.hull > 0 go back to our turn and fight SOLVED
            //we must keep fighting until, aliens turn to fight back SOLVED
            // until one or the other dies SOLVED
            //if the alien still has health? what do we want to happen then?
            //aliens turn SOLVED
            
            } else {
              message1 = `You have destroyed the enemy! `;
              console.log(`There are ${enemyCount} ships left`)
              // alien.hull < 0 we go down a round
              //when the alien loses all its health, BRING ON A NEW SHIP!
              //HOW DO WE BLOODY DO IT????
              
              enemyCount--
              
            }
          } else {
            message1 = `You have missed the alien. `;
            enemy.attack1
            //not going to enemy turn????
            //ending game currently
          }
        } else if (userInput1.toLowerCase() == `retreat`) {
          message1 = `You were routed, Game over `;
        } else {
          message1 = `Please input appropriate response.`
          //this.attack(alien)
          //come back to stop for unnecessary response
        }
        return message1;
      } else {
        console.log(`You destroyed all enemy ships!`)
      }
    }
};

const enemy = {
  hull: Math.round(Math.random() * (6 - 3) + 3), //randomize hull strength //
  firePower: Math.round(Math.random() * (4 - 2) + 2), //randomize firepower //2-4
  accuracy: Math.random() * (0.8 - 0.6) + 0.6, //*  // randomize accuracy
  isOperable: true,

  attack1(human) {
    let message2 = ``;
    displayMessage(message2)
    let toHit = Math.random();
    if (human.hull > 0) {
      // starts fighting the humans
      if (this.accuracy > toHit) {
        human.hull = human.hull - this.firePower;
        //dynamically being changed, reassigning value for hull.
        if (human.hull > 0) {
          //pass back to user
          //human.isOperable = true;
          message2 = `You were hit! you have ${human.hull} hull points left`;
          //console.log(`You were hit! you have ${human.hull} hull points left`)
        } else {
          //game over
          //human.isOperable = false;
          message2 = `You were killed`;
        }
      } else {
        message2 = `The enemy missed`;
        //pass back to user
      }
    } else {
      //message2 = `The enemy has been killed`;
      //bring on new enemy/run function back
    }
    return message2;
  },
};

function displayUserStats() {
  displayUserHull.innerHTML = user.hull
  displayUserFirePower.innerHTML = user.firePower
  displayUserAccuracy.innerHTML = user.accuracy
}

function displayEnemyStats() {
  displayEnemyHull.innerHTML = enemy.hull
  displayEnemyFirePower.innerHTML = enemy.firePower
  displayEnemyAccuracy.innerHTML = enemy.accuracy
}

function displayMessage(x){
  prompt(x);
}

if (user.hull > 0 && enemy.hull > 0 ){
  //maybe do while loop when enemyCount>0 then go for a for loop
  while(enemyCount> -1){

  //for(i=7; i<10; i++){
    //no specific end
      //different values come with different end points
      //dont have right maximum/minimum i values?????
      console.log(user.attack(enemy))
      console.log(enemy.attack1(user))  
      }
    }
    attackButton.addEventListener("click", () => {
        user.attack(enemy)
    });
  

// const battle = (user, enemy) => {
//   if (user.hull >0  && enemy.hull > 0) {
//     console.log(`users turn`);
//     console.log(user.attack(enemy));
//   } else console.log(`enemy turn`);
//   //enemy.attack1(human)
//   // results = enemy.attack(user);
//   console.log(enemy.attack1(user));
// };

// console.log(battle(user, enemy));

//for (let i=0; i<enemyCount; i++){
  //THIS IS NOT SUPPOSED TO BE LOOP
  // battle(user,enemy)
  // while (i>0){
  //  console.log(i)
  //  enemyCount--
  //until either user dies or enemy destroyed 6/7 times -- finality
  //end game
  // if (user.hull > 0 && enemy.hull > 0 ){
  //   console.log(user.attack(enemy))
  //   console.log(enemy.attack1(user))
    //THIS IS THE LOOP
    //iterating through the loop

    
  // } else if (user.hull > 0 && enemy.hull <= 0 ){
    
    //initiate another battle round starting with user attacking new enemy with one less ship
//   } 
// }
// enemyCount--
// //input for attack no loop
// //trigger attack 6 times here
// }
  
// return msg
//alert let message = computer .attack
// you don't want to return before you make the function call
///  computer.attack(player);
//return something from computer. attack, we need both returns
// return computer .attack
//let results = computer.attack and store it
// rturn those values.
// alert whaterver computer. attack is

// round system 
// counter 0 
// user 0
// enemy 1
// set round back 0

//problems with code
//doesnt run it back
    //taking the enemy cap into account
        //no loop yet*******
  