// app.post('/signup', (newUser))

// serves the loggedin html
// function makeAppCard(event) {
//     const appElem = `<div class="card">
//         <h2>${name[id]}`
// }
// const appSection = document.querySelector('#application-section')

function makeApp(app) {
    // app.preventDefault()


    const apply_date = document.querySelector('#apply_date');
    const position_url = document.querySelector('#position_url');
    const company_name = document.querySelector('#company_name');
    const title = document.querySelector('#title');
    const user_notes = document.querySelector('#user_notes');

    
    let bodyObj = {
        apply_date: apply_date.value,
        position_url: position_url.value,
        company_name: company_name.value,
        title: title.value,
        user_notes: user_notes.value
    };
    // console.log(bodyObj);

    axios.post('http://localhost:7575/newApp', bodyObj)
    .then(() => {
        const appCard = document.createElement('div')
        appCard.classList.add("appCard")
        appCard.innerHTML += `<p id="apply_date-${appCard.id}">Date Applied: ${apply_date.value}</p>
        <p id="url-${appCard.id}">Company Website: ${position_url.value}</p>
        <p id="company-${appCard.id}">Company Name: ${company_name.value}</p>
        <p id="title-${appCard.id}">Position Title: ${title.value}</p>
        <p id="notes-${appCard.id}">Notes: ${user_notes.value}</p>
        <button type="submit" class="edit-button" id="edit-button-${appCard.id}">Edit</button>
        `
        document.querySelector('#application-section').appendChild(appCard);

        
        console.log(appCard, 'APPLICATION CREATED!')
        }).catch(err => {
        console.log('APPLICATION NOT CREATED!', err);
        // res.status(500).send('GABE - error when trying to create new account')

        
    });
}

const newApplicationBtn = document.querySelector("#appBtn")
newApplicationBtn.addEventListener('click', makeApp)
    

// retrieves user data when page loads
function getAllApps() {

    axios.get('http://localhost:7575/useraccount') //get this page, then run this function to load this data
    .then((allApps) => {
        allApps.data.forEach((item) => {
            const appCard = document.createElement('div')
            // appCard.setAttribute('id', 'addCards-${id}') //i need the id of the entry to be added to the id so that I can edit each individual card
            appCard.classList.add("appCard")
            appCard.innerHTML +=
            `<p id="apply_date"><b>Date Applied:</b> ${item.apply_date}</p>
            <p id="url"><b>Company Website:</b> ${item.position_url}</p>
            <p id="company"><b>Company Name:</b> ${item.company_name}</p>
            <p id="title"><b>Position Title:</b> ${item.title}</p>
            <p id="notes"><b>Notes:</b> ${item.user_notes}</p>
            `
            document.querySelector('#application-section').appendChild(appCard);

        })

        // console.log(allApps.data)
        // const editBtn = document.querySelectorAll(".edit-button")
        // for (let i = 0; i < editBtn.length; i++) {
        // editBtn[i].addEventListener('click', editApp)
// }
     })
 }

/* Edit and delete buttons <button type="submit" id="edit-button">Edit</button>
<button type="submit" id="delete-button">Delete</button> */

getAllApps() //automatically called when account.html loads

function logout() {
    // redirect to home page and forget cookies
    // axios.get('http://localhost:7575/logout')
    document.getElementById("logout-button")
    window.location.href = 'http://localhost:7575/'
    wp_logout()
};

const logoutBtn = document.querySelector("#logout-button")
logoutBtn.addEventListener('click', logout)

// const selectedfile = document.getElementById("")



// // function deleteApps() {
// //     if ()
// // }
// const deleteBtn = document.querySelector("#delete-button")
// deleteBtn.addEventListener('click', deleteApps)

    
// function editApp(event) {
//     // getAllApps()
//     event.preventDefault()
//     console.log(event);
//     const parent = event.target.parentNode
//     const date_edit = parent.querySelector(`#apply_date`)
//     const url_edit = parent.querySelector(`#url`)
//     const company_edit = parent.querySelector(`#company`)
//     const title_edit = parent.querySelector(`#title`)
//     const notes_edit = parent.querySelector(`#notes`)
//     const edit_button = parent.querySelector(`.edit-button`)
//     console.log(parent);

    

//     // url_edit.contentEditable = true;
//     // date_edit.contentEditable = true;
//     // company_edit.contentEditable = true;
//     // title_edit.contentEditable = true;
//     // notes_edit.contentEditable = true;
    

//     edit_button.addEventListener('click', function() { //correct
//         axios.put('http://localhost:7575/useraccount', parent)
//     })

//     url_edit.contentEditable = true;
//     date_edit.contentEditable = true;
//     company_edit.contentEditable = true;
//     title_edit.contentEditable = true;
//     notes_edit.contentEditable = true;

//     edit_button.innerText = "SAVE"
//     // let body = {
//     //     apply_date: date_edit.innerText,
//     //     position_url: url_edit.innerText,
//     //     company: company_edit.innerText,
//     //     title: title_edit.innerText,
//     //     notes: notes_edit.innerText 
//     // }
//     axios.get('http://localhost:7575/useraccount', parent)
//     .then(() => {
//         // getAllApps()
//         url_edit.contentEditable = false;
//         apply_date.contentEditable = false;
//         position_url.contentEditable = false;
//         company.contentEditable = false;
//         title_edit.contentEditable = false;

//         edit_button.innerText = "EDIT"
//     });
        
// }




// editBtn.addEventListener('click', editApp)

// function saveEdit() {
// // open only after clicking edit, then update the database once finished
// // cancel
// }






// // upload file
// const form = document.querySelector('resume-upload');
// form.addEventListener('submit', uploadHandler);

// function uploadHandler(event) {
//     event.preventDefault();

//     const url =  new URL(form.action);
//     const FormData = new FormData(form);

//     const fetchOptions = {
//     method: form.method,
//     body: FormData,
//     };

//     fetch(url, fetchOptions);

// }
//         console.log(appCard, 'APPLICATION CREATED!')
//         }).catch(err => {
//         console.log('APPLICATION NOT CREATED!', err);
        // res.status(500).send('GABE - error when trying to create new account')


    // app.post('/login', (req, res) =>{
    //     console.log(req.body); //test to make sure we are receiving input data 
    // })
    
    // app.post('/signup', (req, res) =>{
    //     console.log(req.body);
    // })

// dbRes[0]at user id
    // addCompany: (req, res) => {
    //     let {compName, website} = req.body;
    //     sequelize.query(`insert into company (compName, website)
    //     values ('${compName}', '${website}');`)
    //     .then(dbRes => {
    //         console.log('company added', dbRes[0])
    //         res.status(200).send(dbRes[0])
    //     }).catch(err => {
    //             console.log('company not added', err);
    //             res.status(500).send('internal server error')
    //     });

    // },
