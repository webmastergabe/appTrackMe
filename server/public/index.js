function userLogin(event) {
    event.preventDefault()

    const email = document.querySelector('#userEmail')
    const password = document.querySelector('#userPassword')

    let body = {
        email: email.value, 
        password: password.value
    }

    axios.post('http://localhost:7575/login', body)
        .then(res => {
            console.log('response received!')
            if (res.status === 200) {
                window.location.href = 'http://localhost:7575/account';
            } else {
                alert("We couldn't log you in. Please check your email and password and try again.");
            }
            // redirect window to point to new url
        })
        .catch(err => {
            console.log('response not received', err);
            // res.status(500).send('client index error')
        })
    }

const loginBtn = document.querySelector("#loginBtn")
loginBtn.addEventListener('click', userLogin)
 
// put in a function if I want it to run on command
// if wanting to run as the page it loaded, put the axios request outside of a function

// alertverrors gohere

function createAccount(event) {
    event.preventDefault()

    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    let body = {
        email: email.value, 
        password: password.value
    }

    axios.post('http://localhost:7575/signup', body)
        .then(() => {
            console.log('account created!')
            // redirect window to point to new url
            window.location.href = 'http://localhost:7575/account'; //this should route to users id number or route (but must be private to the user)
        }).catch(err => {
            console.log('account not created', err);
            // res.status(500).send('GABE - error when trying to create new account')
    });
}

const newAccountBtn = document.querySelector("#newAccount")
newAccountBtn.addEventListener('click', createAccount)

function openForm(event) {
    document.getElementById("popupForm").style.display = "block";
  }
  
function closeForm(event) {
    document.getElementById("popupForm").style.display = "none";
  }

// document.getElementById("").style.display = "block";



// when page loads will need to use axios request and server will need to know which user is logging in
// cookies will tell the user 

// once you have checked that password is right, cookies will remember the password
// cookies will need to be in a route that requests users password