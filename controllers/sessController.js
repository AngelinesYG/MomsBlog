const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')


sessions.get('/new', (req, res)=>{
   res.render('sessions/new.ejs', {
      currentUser: req.session.currentUser
   })
})

sessions.post('/', (req, res)=>{
   User.findOne({username: req.body.username}, (err,
      foundUser)=>{
         console.log(req)
      if (err){
         console.log(err);
         res.send('Sorry, there was a problem')
      } else if (!foundUser){
         res.send('<a href="/">Sorry, no user found</a>')
      } else {
         if (bcrypt.compareSync(req.body.password,
            foundUser.password)){
               console.log(req)
            req.session.currentUser = foundUser
            res.redirect('/momblog/index')
         } else {
            res.send('<a href="/">Sorry, invalid password</a>')
         }
      }
   })
   sessions.delete('/', (req, res)=>{
      req.session.destroy(()=>{
         res.redirect('/')
      })
   })
})

module.exports =  sessions
