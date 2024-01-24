require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')
// console.log(CONNECTION_STRING) //a way to check and make sure you are connected to pgAdmin (pgAdmin port is always 5432)
const sequelize = new Sequelize(CONNECTION_STRING);
const express = require('express');


module.exports = {
    getUser: (req, res) => {
        let {email, password} = req.body;

        sequelize.query(`select * from users where email = '${email}' and password = '${password}'`)
        .then(dbRes => {
            if (dbRes[0].length === 0) { //makes query successfully but no answers in it
                console.log('No User Found');
                res.status(403).send('Invalid login')
            } else {
                req.cookies['id']
                res.cookie('email', email)
                res.cookie('id', dbRes[0][0].id)
                console.log('User Logged In');
                res.status(200).send(dbRes[0])
                
            }
        }).catch(err => { //an error is made while making the query --error comes back from sql (or the database could be offline)
            res.status(403).send('Invalid login')
        })
    },

    newUser: (req, res) => {
        let {email, password} = req.body;
            console.log(req.body)
        if (email.length === 0 || password.length === 0) {
            res.status(403).send('Invalid SignupS')
            return
        } 
        sequelize.query(`insert into users (email, password)
        values('${email}', '${password}');`)
            .then(dbRes => {
                console.log('User Created')
                res.status(200).send(dbRes[0])
            }).catch(err => {
                console.log('User not created', err);
                res.status(500).send('internal server error')
        })
    },

    addApplication: (req, res) => {
        let {apply_date, position_url, company_name, title, user_notes} = req.body;
        console.log(req.body)

        sequelize.query( //back ticks are not needed here bc they are only needed for template strings
        // this is how all sqlqueries should be made to prevent sql injections
            'insert into position (company_name, title, apply_date, user_notes, position_url, user_id) values(:company_name, :title, :apply_date, :user_notes, :position_url, :user_id);',
            { //replacements escapes inputs and makes sure they get submitted as strings and they dont modify the query
              replacements: { company_name: company_name, title: title, apply_date: apply_date, user_notes: user_notes, position_url: position_url, user_id: req.cookies['id'] },
              type: sequelize.QueryTypes.INSERT
            }
          )
        
        .then(dbRes => {
            console.log('New Application Added!!!')
            res.status(200).send(dbRes[0])
        }).catch(err => {
            console.log('Did Not Add Application!')
        })
    },

    verifyUser: (req, res) => {
        const user = req.cookies['id']

        sequelize.query(`select * from position where user_id = ${user};`).then(dbRes => {
            res.send(dbRes[0])
        })
    },

    // makeEdit: (req, res) => {
    //     sequelize.query()
    // }

}



    // public index.js routes to server index.js  which will call the function in the controller
    // loadUserPage: (req, res) => {

    // }

    // getAllApps: (req, res) => {
    //     sequelize.query(`select * from company;`)
    //     .then(dbRes => res.status(200).send(dbRes[0]))
    //     .catch(err => console.log(err));
    // }