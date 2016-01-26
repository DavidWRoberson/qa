var questions = require("../controllers/questions.js");

module.exports = function(app){
    app.get("/", function(req, res){
        res.render('index');
    })
    
    app.get("/questions", function(req, res){
        questions.retrieve(req, res);
    })

    app.get("/question/:id", function(req, res){
        questions.retrieveOne(req, res);
    })
    
    app.post("/add_answer/:id", function(req, res){
        questions.answer(req, res);
    })
    
    app.get("/answer/:id/like", function(req, res){
        questions.like_answer(req, res);  
    })

    app.post("/questions", function(req, res){
        questions.create(req, res);
    })
    
   
}