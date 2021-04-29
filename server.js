//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: true }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.set('veiw engine', 'ejs')
//___________________
// Routes
//___________________
//localhost:3000
// app.get('/' , (req, res) => {
//   res.send('Hello World!');
// });
const momblogSeed = require('./models/momblogSeed.js')

const Momblog = require('./models/momblog.js')
   // Momblog.create(momblogSeed,
   //    (err, allMomblogs) =>{
   //       if (err){
   //          console.log(err)
   //       } else {
   //          console.log(allMomblogs)
   //       }
         // res.redirect('/momblog')
   //    }
   // )

///HOME/////
app.get('/momblog', (req, res)=>{
   Momblog.find({}, (err, allMomblogs) =>{
      res.render('home.ejs',
      {
         momblogs: allMomblogs
      });
   })
})


///INDEX//////
app.get('/momblog/index', (req, res)=>{
   Momblog.find({}, (err, allMomblogs) =>{
      res.render('index.ejs',
         {
            momblogs:allMomblogs
         }
      );

   });
})

/////NEW//////(start new blog)
app.get('/momblog/new', (req, res)=>{
   res.render('new.ejs')
})

////CREATE/////(create and posts new blog)
app.post('/momblog/index', (req, res)=>{
   Momblog.create(req.body, (err, momblog)=>{
      res.redirect('/momblog/index')
   })
})

/////EDIT Prt-1 (get blog)/////
app.get('/momblog/:id/edit', (req, res)=>{
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
app.put('/momblog/:id', (req, res)=>{
   Momblog.findByIdAndUpdate(req.params.id,
   req.body, (err, momblog)=>{
      res.redirect('/momblog/index')
   })
})

////SHOW//////
app.get('/momblog/:id', (req, res)=>{
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
app.delete('/momblog/:id', (req, res)=>{
   Momblog.findByIdAndRemove(req.params.id,
      (err, momblog)=>{
      res.redirect('/momblog/index')
   })
})

// app.get('/', (req, res)=>{
//    res.send('hello world')
// })

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
