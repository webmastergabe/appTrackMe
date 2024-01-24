// newUser: (req, res) => {
//     let {email, password} = req.body;
//         console.log(req.body)

// const { Sequelize } = require("sequelize");

// //     sequelize.query(`insert into users (email, password)
// //     values('${email}', '${password}');`)
// //         .then(dbRes => {
// //             console.log('User Created')
// //             res.status(200).send(dbRes[0])
// //         }).catch(err => {
// //             console.log('User not created', err);
// //             res.status(500).send('internal server error')
// //     })
// // },

// // controller
// addApplication: (req, res) => {
//     let {name, website} = req.body;
//     console.log(req.body)

//     sequelize.query(`insert into company(name, website, id)
//     values('${name}', '${website}', ${req.cookies['id']};)`)
//     .then(dbRes => {
//         console.log('New Company Added!!!')
//         res.status(200).send(dbRes[0])
//     }).catch(err => {
//         console.log('Did Add Password!')
//     })
// }

// // public js
// function submitApp(event) {
//     event.preventDefault();

//     let name = document.querySelector('#name');
//     let website = document.querySelector('#website');

//     let bodyObj = {
//         name: name.value,
//         website: website.value
//     };

//     axios.post('http://localhost:7575/newApp', body)
//     .then(() => {
//         console.log('APPLICATION CREATED!')
//         // redirect window to point to new url
//         window.location.href = 'http://localhost:7575/account.html'; //this should route to users id number or route (but must be private to the user)
//     }).catch(err => {
//         console.log('APPLICATION NOT CREATED!', err);
//         // res.status(500).send('GABE - error when trying to create new account')
//     });
// }

// const newApplicaitonBtn = document.querySelector("#appBtn")
// newAapplicationBtn.addEventListener('click', submitApp)





// function newApplication(event) {
//     const application = document.createElement('div');
//     application.classList.add('application-card');

//     application.innerHTML = 
// }


// account js

{/* <html>
  <head>
    <title>Title of the document</title>
    <style>
      * {
        box-sizing: border-box;
      }
      .openBtn {
        display: flex;
        justify-content: left;
      }
      .openButton {
        border: none;
        border-radius: 5px;
        background-color: #1c87c9;
        color: white;
        padding: 14px 20px;
        cursor: pointer;
        position: fixed;
      }
      .loginPopup {
        position: relative;
        text-align: center;
        width: 100%;
      }
      .formPopup {
        display: none;
        position: fixed;
        left: 45%;
        top: 5%;
        transform: translate(-50%, 5%);
        border: 3px solid #999999;
        z-index: 9;
      }
      .formContainer {
        max-width: 300px;
        padding: 20px;
        background-color: #fff;
      }
      .formContainer input[type=text],
      .formContainer input[type=password] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 20px 0;
        border: none;
        background: #eee;
      }
      .formContainer input[type=text]:focus,
      .formContainer input[type=password]:focus {
        background-color: #ddd;
        outline: none;
      }
      .formContainer .btn {
        padding: 12px 20px;
        border: none;
        background-color: #8ebf42;
        color: #fff;
        cursor: pointer;
        width: 100%;
        margin-bottom: 15px;
        opacity: 0.8;
      }
      .formContainer .cancel {
        background-color: #cc0000;
      }
      .formContainer .btn:hover,
      .openButton:hover {
        opacity: 1;
      }
    </style>
  </head>




  <body>
    
    <div class="openBtn">
      <button class="openButton" onclick="openForm()"><strong>Open Form</strong></button>
    </div>


    <div class="loginPopup">
      <div class="formPopup" id="popupForm">
        <form action="/action_page.php" class="formContainer">
          <h2>Please Log in</h2>
          <label for="email">
            <strong>E-mail</strong>
          </label>
          <input type="text" id="email" placeholder="Your Email" name="email" required>
          <label for="psw">
            <strong>Password</strong>
          </label>
          <input type="password" id="psw" placeholder="Your Password" name="psw" required>
          <button type="submit" class="btn">Log in</button>
          <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
        </form>
      </div>
    </div>
    <script>
      function openForm() {
        document.getElementById("popupForm").style.display = "block";
      }
      function closeForm() {
        document.getElementById("popupForm").style.display = "none";
      }
    </script>
  </body>
</html> */}