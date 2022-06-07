// // CALLBACK FUNKCIJA

// const second = () => {
//     setTimeout(() => {
//         console.log('async hey there');
//     }, 2000);
// }

// const first = () => {
//     console.log('hey there');
//     second();
//     console.log('The end');
// }

// first();
// // map funkcija
// const fetchPromise = fetch('https://www.youtube.com/watch?v=s7wmiS2mSXY&ab_channel=MuleSoftVideos');

// // Target main element
// const main = document.getElementById('main');

// fetchPromise.then(Response =>{
//     return Response.json();
// }).then(people => {
//     const names = people.map(person => person.name).json("\n");

//     // Appen names to main element
//     main.innerHTML = names;
// })
// // forEach funkcija
// const array1 = ['a', 'b', 'c']

// array1.forEach(element => console.log(element));

// // Filter() funkcija

// const words = ['spray','limit','exuberant','destruction','present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// let newArray = arr.filter(callback(element[ index, [array]])[thisArg])

// // funkcijos uzrasymas

// (argument1, argument2, ... argumentN) => {
//     // funcijos BODY
// }
// const add = (a, b) => a + b;

// // REDUCE funkcija

// const values = [1, 2, 3, 4, 5, 6];
// const total = values.reduce((total, num) => total + num);




// KATINUKO UZDUOTIS

const myBtn = document.querySelector('button');
const myPlace = document.getElementById('myPlace');
const myImg = document.createElement('img');
myPlace.appendChild(myImg);
myImg.className = "img-thumbnail";

// const getCatImg = () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(Response => Response.json())

//         .then(data => {
//             // console.log(data)
//             myImg.src = data.message;
//         });
// }
const getDogImg = async () => {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        console.log(res);
        const data = await res.json();
        console.log(data);
        myImg.src = data.message;
    } catch (error) {
        console.log(error)
    }
}

myBtn.addEventListener('click', getDogImg)

// const myButton = document.querySelector('button');
// const myPalace = document.getElementById('myPalace');
// const myImg1 = document.createElement('img1');
// myPalace.appendChild(myImg1);
// myImg1.className="img-thumbnail";

// const getDogImg = () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(Response => Response.json())
//     .then(data => {
//         console.log(data)
//         myImg1.src = data[0].url;
//     })
// }

// myButton.addEventListener('click', getDogImg)