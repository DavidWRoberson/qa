//Login Factory -------------
myApp.factory('loginFactory', function(){
    var factory = {};
    while (!factory.user || factory.user.length < 1) {
        var user = prompt("Please enter your name!");
        factory.user = user;
    }
    return factory;
})

//Question Factory -------------
myApp.factory('questionFactory', function(){
    var factory = {};
    factory.getQuestions = function(callback){
        $.get(
            "/questions",
            function (response) {
                if (response.type) {
                    callback(response.questions);
                } else {
                    alert("There was a problem retrieving the questions.");
                }
            }
        )
    }
    factory.addQuestion = function(data, callback){
        $.post(
            "/questions",
            data,
            function (response) {
                if (response.type) {
                    callback();
                } else {
                    alert("There was a problem adding your question.");
                }
            }
        )
    }
    factory.getQuestion = function(id, callback){
        $.get(
            "/question/" + id,
            function(response){
                if (response.type) {
                    callback(response.question);
                } else {
                    alert("Invalid Question");
                }
            }
        )
    }
    factory.addAnswer = function(id, data, callback){
        $.post(
            "/add_answer/" + id,
            data,
            function(response){
                if (response.type) {
                    callback(response);
                } else {
                    alert("Invalid Answer");
                }
            }
        )
    }
    factory.updateLikes = function(id, callback){
        $.get(
            "/answer/" + id +"/like",
            function(response){
                if (response.type) {
                    callback(response.question);
                } else {
                    alert("Problem liking");
                }
            }
        )
    }
    return factory;
})
