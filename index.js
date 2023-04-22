'use strict';

// Fix capitalization in name

const airline = 'TAP Air Portugual';

console.log(airline.toLowerCase());

const myName = 'eLvIs';

console.log(myName.charAt(0).toUpperCase() + myName.slice(1, 5).toLowerCase());


// Comparing emails

const email = 'hello@elvis.io';
const loginEmail = ' Hello@Elvis.Io \n';


const lowerEmail = loginEmail.toLocaleLowerCase().trim();

console.log(lowerEmail === email);


//replacing
const priceUS = '288,97$';
const priceBR = priceUS.replace('$', 'R$');

console.log(priceBR);



const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace(/door/g, 'gate'));
console.log(announcement.replaceAll('door', 'gate'));


// Booleans

const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('A32'));


plane.startsWith('A320') && plane.endsWith('neo') ?
    console.log(`Do part of new family`) :
    console.log(`Don't be part of new family`);


//PRACTICE EXERCISE
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();

    baggage.includes('knife') || baggage.includes('gun') ? 
        console.log('You aren\'t allowed on board') :
        console.log('Welcome aboard');
}

checkBaggage(`I've a laptop, some food and a pocket knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);








// const plane = 'A320';



// console.log(airline.slice(-2));


// const checkMiddleSeat = function (seat) {
//     const s = seat.slice(-1);

//     if (s === 'B' || s === 'E')
//         console.log(`You got the middle seat!`);
//     else
//         console.log(`You got lucky`);
// }


// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');


// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);


// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Air'));


// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline);

// console.log(airline.slice(0, airline.indexOf(' ')));