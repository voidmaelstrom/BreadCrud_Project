// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')
const breads = require('./breads_controller.js')

// export
module.exports = baker

// baker seed
baker.get('/data/seed', (req, res) => {
  Baker.insertMany(bakerSeedData)
      .then(res.redirect('/breads'))
})

// Index: 
baker.get('/', (req, res) => {
  Baker.find()
      .populate('breads')
      .then(foundBakers => {
          res.send(foundBakers)
      })
})

// Show: 
// baker.get('/:id', (req, res) => {
//   Baker.findById(req.params.id)
//       .populate('breads')
//       .then(foundBaker => {
//           res.render('bakerShow', {
//               baker: foundBaker
//           })
//       })
// })

// Show:
// show 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate({
            path: 'breads',
            options: { limit: 2 }
        })
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

// Delete
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
      .then(deletedBaker => { 
        res.status(303).redirect('/breads')
      })
})

breads.get('/data/baker/seed', (req, res) => {
    Baker.insertMany([
        {
            name: 'Monica',
            startDate: '1994-09-22',
            bio: 'Prefers napkins folded a particular way.'
          },
          {
            name: 'Ross',
            startDate: '1995-09-21',
            bio: 'Loves dinosaurs. Is currently on a break.'
          },
          {
            name: 'Joey',
            startDate: '1996-09-19',
            bio: 'Does NOT share food. Recommends that you read Little Women.'
          },
          {
            name: 'Phoebe',
            startDate: '1996-09-19',
            bio: 'Fierce protector of the bakery\'s smelly cat.'
          },
          {
            name: 'Chandler',
            startDate: '1997-09-25',
            bio: 'Thinks chewing gum is perfection. Honestly, could it BE any better?'
          },
          {
            name: 'Rachel',
            startDate: '1998-09-24',
            bio: 'Is NOT a shoe. Occasionally a fan of lobsters.'
          }
    ])
      .then(() => {
        res.redirect('/breads')
      })
  })