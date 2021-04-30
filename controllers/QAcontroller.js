// const express = require('express')
// const QuestAns = require('../models/qa.js')
// const questAns = express.Router()
//
//
//
// //Q-A CREATE SEED///
// questAns.get('/momblog/qa', (req, res) =>{
//    QuestAns.create(qaSeed, (err, allQas)=>{
//       if (err){
//       console.log(err)
//       }else {
//       console.log(allQas)
//       }
//       res.redirect('/momblog/qa')
//    })
// })
//
//
// ///Q-A PAGE///
// questAns.get('/qa', (req, res)=>{
//    QuestAns.find({}, (err, foundMomblog) =>{
//       res.render('qa.ejs',
//          {
//             questans:foundQuestAns
//          }
//       );
//
//    });
// })

// module.exports = questAns
