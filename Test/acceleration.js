/* G = 6.673 x 10-11 Nm2/Kg2
The radius of the Earth is = 6.38 x 10+6 m 
The mass of the Earth is  = 5.98 x 10+24 kg
Satellite is orbiting the earth 400km above the surface
what acceleration due the gravity dose it experience?

g =GM/ (r+h)**2
*/

const G = 6.673e-11;
const radius = 6.38e6;
const mass = 5.98e24;
 
let height = 400000;

let acceleration = (G*mass)/(height+radius)**2;

console.log ("acceleration is "+acceleration);


