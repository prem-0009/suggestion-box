const express = require("express");
const router = express.Router();
const {allSuggestions,createSuggestion} = require('../Controller/controllerSuggestion.js')

const Suggestion = require("../Model/schemaSuggestion.js");


//find all
router.get("/all-suggestions", allSuggestions)

//create one suggestion
router.post("/create-suggestion", createSuggestion);

router.get('/create-suggestion', (req, res)=>{
    res.render('main/add-suggestion.ejs')
})

//find by name

// router.get("/byName-suggestion", byNameSuggestion);

// //update-suggestion
// router.put("/update-suggestion/: title", (req, res) => {
    
    
    
//     Suggestion.findOne({title: req.params.title}).then((ValSuggestion)=>{
//         console.log(title)
//         const newSuggestion = new Suggestion();
//         const {name, suggestion, likes, anonymous, timeCreated} = req.body;
//         console.log(ValSuggestion)
//         newSuggestion.name = name;
//         newSuggestion.suggestion = suggestion;
//         newSuggestion.likes = likes;
//         newSuggestion.anonymous = anonymous;
//         newSuggestion.timeCreated = timeCreated;
//         console.log(newSuggestion)
//         // return res.status(400).json({newSuggestion});
//         newSuggestion.save().then((val)=>{
//             return res.status(200).json({confirmation: 'success', val})
//         })
//         // .then((suggestionNew)=>{
//     }).

//         // return res.status(200).json({suggestionNew})
        
        
//     catch((err) => res.status(400).send(err))
// });

//delete-suggestion
// router.delete("/delete-suggestion/:id", (req, res) =>{
    
//     Suggestion.findByIdAndDelete(req.params.id)
//     .then((suggestion) =>{
//         return res.status(200).json({suggestion})
//     })
//     .catch((err) => res.status(500).json({confirmation: 'fail', err}));
// })

module.exports = router;
