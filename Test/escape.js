/* Determine the escape velocity of the Panetx if its radius is 7149 km and mass is 1.898 x 10+27 kg 
v = /2GM/R 
g= 6.673 x 10-11 Nm2/Kg2 */

const G = 6.673e-11;
const radius = 7149000;
const mass = 1.898e27;



let velocity = Math.sqrt((2*G*mass)/radius);


console.log("velocity is "+velocity.toFixed(5));
 