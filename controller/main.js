const mongoose = require('mongoose');
const Guest = require('../models/Guest')

exports.thePost = (req, res) => {
        console.log(req.body);
        
        const guest = new Guest({
            name: req.body.name,
            email: req.body.email,
            friendOf: req.body.friendOf,
            message: req.body.message,
            phone: req.body.phone
            });
    
        guest
        .save()
        .then(result => {
    
          res.status(201).json({
            message: "Success",
          });
        })
        .catch(err => {
          res.status(500).send({
            error:{
              message: err.message
            }
          });
        });    
    },

exports.theGet = (req, res) => {
        Guest.find({})
        .exec()
        .then( member =>{
            res.status(200).json(member)
        })
        .catch (err=>{
          res.status(500).json({error:{
            message: err
          }});
        });
    }


