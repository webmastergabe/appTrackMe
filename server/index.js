require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env

// const multer = require('multer');
// const upload = require('./upload');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const uploads = mutler({ storage: storage});
// module.exports = uploads;
const { newUser, getUser, addApplication, verifyUser } = require('./controller.js')


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/public'));
app.use(cors())
app.listen(7575, () => console.log(`It's lit on ${SERVER_PORT}`))

// validation should always happen on the server side -they should validate the input

// main page
app.get('/', (req, res) => {
    res.sendFile('/index.html', {root: __dirname + '/public'});
  });

app.post('/login', getUser)
app.post('/signup', newUser)

// user account page
app.get('/useraccount', verifyUser)

app.get('/account', (req, res) => { //read cookie from the request
  if (req.cookies.email !== undefined) { //cookies plural is the dictionary object of all the cookies
    res.sendFile('/account.html', {root: __dirname + '/public'});
  } else {
    res.redirect('/')
  }
});

app.post('/newApp', addApplication)


// app.post('/upload', upload.single('file', (req, res) => {
//   res.json({ message: 'File uploaded successfully!'});
// }));



//  - this is for the edit button
// app.put('/useraccount', editApp)


// app.post('/account', (getAllApps))



// the server index handles routes (where the information is coming/going) takes in requests and sends information back


//res.sendFile will send an entire file 

//if user exists direct to user page, if not go back to homepage
// need a way to track if ur logged in --look up cookies
// cookie is dependent per user and is stored on the computer - used to verify that we have successfully logged in
// server sends client back a cookie so that we can verify identity