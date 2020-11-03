const Suggestion = require("../Model/schemaSuggestion.js");


module.exports = {

    allSuggestions : (req, res) => {
        Suggestion.find().then((suggestion) =>{
          return res.render("main/suggestions-list", {list: suggestion})
        })
          .catch((err) => res.json({  err }));
    
    },

    createSuggestion: (req, res )=>{
        // Suggestion.findOne({title: req.body.title}).then((suggestion)=>{
        //   res.send(req.body.title)
        // })
        // console.log(req.title)
        const newSuggestion = new Suggestion();
        newSuggestion.title = req.body.title;
        newSuggestion.name = req.body.name;
        newSuggestion.suggestion = req.body.suggestion;
        newSuggestion.likes = req.body.likes;
        newSuggestion.anonymous = req.body.anonymous;
        newSuggestion.timeCreated = req.body.timeCreated;
      
        newSuggestion
          .save()
          .then((suggestion) =>{
            console.log('hi')
            res.redirect('/api/v1/suggestions/all-suggestions')})
            // res.status(200).json({ confirmation: "success", suggestion }))
          .catch((err) => res.status(500).json({confirmation: 'fail', err}));
      }
    
    








}