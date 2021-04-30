const express = require('express')
const Momblog = require('../models/momblog.js')
const router = express.Router()




///HOME/////
router.get('/', (req, res)=>{
   Momblog.find({}, (err, allMomblogs) =>{
      res.render('home.ejs',
      {
         momblogs: allMomblogs
      });
   })
})

///Q-A PAGE///
router.get('/qa', (req, res)=>{
   Momblog.find({}, (err, foundMomblog) =>{
      res.render('qa.ejs',
         {
            momblog:foundMomblog
         }
      );

   });
})

///INDEX//////
router.get('/index', (req, res)=>{
   Momblog.find({}, (err, allMomblogs) =>{
      res.render('index.ejs',
         {
            momblogs:allMomblogs
         }
      );

   });
})

// ///Q-A PAGE///
// router.get('/qa', (req, res)=>{
//    Momblog.find({}, (err, foundMomblog) =>{
//       res.render('qa.ejs',
//          {
//             momblog:foundMomblog
//          }
//       );
//
//    });
// })

/////NEW//////(start new blog)
router.get('/new', (req, res)=>{
   res.render('new.ejs')
})

////CREATE/////(create and posts new blog)
router.post('/index', (req, res)=>{
   Momblog.create(req.body, (err, momblog)=>{
      res.redirect('/momblog/index')
   })
})

/////EDIT Prt-1 (get blog)/////
router.get('/:id/edit', (req, res)=>{
   Momblog.findById(req.params.id,
      (err, foundMomblog)=>{
      res.render('edit.ejs',
         {
            momblog:foundMomblog
         }
      )
   })
})
/////EDIT Prt-2 (post edited blog)//////
router.put('/:id', (req, res)=>{
   Momblog.findByIdAndUpdate(req.params.id,
   req.body, (err, momblog)=>{
      res.redirect('/momblog/index')
   })
})

////SHOW//////
router.get('/:id', (req, res)=>{
   Momblog.findById(req.params.id,
      (err, foundMomblog)=>{
      res.render(
         'show.ejs',
         {
            momblog:foundMomblog
         }
      )
   })
})

/////DELETE////
router.delete('/:id', (req, res)=>{
   Momblog.findByIdAndRemove(req.params.id,
      (err, momblog)=>{
      res.redirect('/momblog/index')
   })
})

module.exports = router
