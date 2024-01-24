// index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Back End Assessment</title>
//   </head>
//   <body class="container">
//     <!-- <h1>Welcome, user!</h1>
//     <form action="/welcome">
//       <label for="name-input">What's your name?</label>
//       <input id="name-input" type="text" name="person" />
//       <button type="submit">SUBMIT</button>
//     </form> -->

//     <h3>Insert a password to get a Hash</h3>
//     <form action="/hash">
//       <label for="password-input">What's your password?</label>
//       <input type="text" name="password" />
//       <button id="password-input">Get Hash</button>
//     </form>


//     <button id="complimentButton">Get a compliment</button>
//     <button id="fortuneButton">Get fortune</button>
    
//     <!-- Features 2-4 -->
//     <!-- <form id="inputForHash">
//       Insert a password to get a hash.
//       <input type="text" name="password"/>
//       <input type="submit"/>
//     </form> -->
    
//     <!-- <form action="/welcome">
//       What is your name?
//       <input type="text" name="name"/>
//       <input type="submit"/> 
//     </form> -->

//     <button> </button>
//     <button> </button>

//     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
//     <script src="main.js"></script>
    
//   </body>
// </html>

// <!-- what is displayed on the user's web page -->

// main.js
// const complimentBtn = document.querySelector("#complimentButton")

// const getCompliment = () => {
//     axios.get("http://localhost:4000/api/compliment/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// complimentBtn.addEventListener('click', getCompliment)

// // This is the front-end server that processes the actions on the web page
// // The page displays a button for the user to click
// // When the user clicks the button, the function, getCompliment runs
// // line 1 attaches the button to the index.html page
// // line 11 creates the action that happens to trigger the function (click button, get a compliment)


// const fortuneBtn = document.querySelector("#fortuneButton")

// const getFortune = () => {
//     axios.get("http://localhost:4000/api/fortune/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// fortuneBtn.addEventListener('click', getFortune)


// // ________________________________________________________

// // const hashBtn = document.querySelector("#password-input")

// // const hashPassword = () => {
// //     axios.get("http://localhost:4000/api/hash/")
// //         .then(res => {
// //             const data = res.data;
// //             alert(data);
// //     });
// // };

// // hashBtn.addEventListener('click', hashPassword)


// //  
// // const welcomeUser = () => {
// //     axios.get("http://localhost:4000/api/welcome/")
// //         .then(res => {
// //             const username = req.query.name;
// //             res.send(`Welcome, ${username}!`);
// //     });
// // };

// // welcomeBtn.addEventListener('submit', welcomeUser)


// controller.js
// module.exports = {

//     getCompliment: (req, res) => {
//         const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
//         // choose random compliment
//         let randomIndex = Math.floor(Math.random() * compliments.length);
//         let randomCompliment = compliments[randomIndex];
      
//         res.status(200).send(randomCompliment);
//     },

//     getFortune: (req, res) => {
//         const fortunes = ["Your success will astonish everyone!", "Your mind is your greatest asset.", "You are wealthy beyond your wildest dreams", "You will live a fulfilled life full of adventure, love, and laugher.", "Your cybersecurity expertise will have a significant impact in protecting sensitive data."];

//         let anotherRandomIndex = Math.floor(Math.random() * fortunes.length);
//         let randomFortune = fortunes[anotherRandomIndex];

//         res.status(200).send(randomFortune);
//     },

//     // hashPassword: (req, res) => {
//     //     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     //     let newWord ="";
//     //     for (let i = 0; i < res.length; i++) {
//     //         const curLetter = res[i];
//     //         const letterIndex = alphabet.indexOf(curLetter);
//     //         const newLetter = alphabet[(letterIndex + offset) % 26]; // use modulus when you need to wrap around an array
//     //         newWord += newLetter;

//     //         res.status(200).send(newWord);
//     // }

//     // console.log(hashPassword);

//     // },


//     // welcomeUser: (req, res) => {
//     //     const person = req.query.person;
//     //     res.sendFile('/api/welcome', {root: __dirname});
//     //     res.send(`Welcome, ${person}!`);
//     // }

// }


// // this is the function that generates the random compliment and takes in the request and response as a parameter
// // will send a status of 200 and display the compliment

// server index.js
// const express = require("express");
// const cors = require("cors");
// // the lines above are to require the json dependencies

// const app = express();
// app.use(cors());
// app.use(express.json());

// const controller = require('./controller')

// app.get("/api/compliment", controller.getCompliment);
// app.get("/api/fortune", controller.getFortune);
// // app.get("/api/hash", controller.hashPassword);
// // app.get("/api/client/welcome", controller.welcomeUser);
// // app.get("/client/hash", controller.getHash);

// app.listen(4000, () => console.log("Server running on 4000"));


    // getLucky: (req, res) => {
    //     let number = Math.floor(Math.random() * 100);
    //     res.status(200).send(number);
    // },

    // module.exports = {
    //     getHouses: (req, res) => {
    //         res.status(200).send(houses);
    //     },
    
    //     createHouses: (req, res) => {
    //         const address = req.body.address;
    //         const price = req.body.price;
    //         const imageURL = req.body.imageURL;
    // console.log(req.body);
    //         const newHouse = {
    //             address,
    //             price,
    //             imageURL,
    //             id: globalID,
    
    //         };
    
    //         houses.push(newHouse);
    //         globalID += 1;
    //         res.send(houses);


    //         getLucky: (req, res) => {
    //             let number = Math.floor(Math.random() * 100);
    //             res.status(200).send(number);
    //         },

    //         getNum: (req, res) => { //make random image?
       
    //             let numbers = Math.floor(Math.random() * 100) + 1;
        
    //             res.status(200).send(numbers);
    //         },
    // getLucky: (req, res) => {
    // //const compliment = sample(COMPLIMENTS);
    // let number = Math.floor(Math.random() * 100);
    // //const gameLink = "<a href='/game'>Click here to play Madlibs.</a>";
  
    // res.status(200).send(number);
    // },
  
//};


// => document.getElementById("pic").innerHTML =
// Math.floor(Math.random() * 100) + 1;
// </script>

// </body>
// </html>

// document.getElementById("randomPhoto").addEventListener("click",e => 

// document.getElementById("photo").innerHTML = `<img src="https://picsum.photos/id/${randomInt(100)}/200/200">`)
