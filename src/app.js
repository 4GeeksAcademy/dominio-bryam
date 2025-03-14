import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};



let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
const dominio =['com', 'es', 'io', 'net'];

function generateDominio () {
      for (let pr of pronoun) {
        for (let ad of adj) {
          for (let no of noun) {
            for (let dom of dominio) {
              console.log(`${pr}${ad}${no}${dom}`);
            }
          }
        }
      }
    }
generateDominio()
    
