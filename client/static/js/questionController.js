//Dashboard controller ------------------
myApp.controller('dashboardController', function(questionFactory, loginFactory, $scope){
    questionFactory.getQuestions(function(questions){
        $scope.questions = questions;
        $scope.$apply();
    })
})

//New Question Controller ----------------
myApp.controller('newQuestionController', function(questionFactory, loginFactory, $scope, $location){
    $scope.question;
    $scope.description;
    $scope.submit = function(){
        if ($scope.question.length >= 10 && $scope.description) {
            questionFactory.addQuestion({question: $scope.question, description: $scope.description}, function(){
                alert("Your question was added.");
                $scope.$apply(function(){
                    $location.path("/");
                });
            })
        }
        else if ($scope.question.length >= 10) {
            questionFactory.addQuestion({question: $scope.question}, function(){
                alert("Your question was added.");
                $scope.$apply(function(){
                    $location.path("/");
                });
            })
        }
        else {
            alert("Error with input");
        }
    }
})

//Show Question Controller ----------------------
myApp.controller('questionController', function(questionFactory, loginFactory, $scope, $routeParams){
    $scope.question
    questionFactory.getQuestion($routeParams.id, function(question){
        $scope.question = question;
        $scope.question.answers.reverse()
        $scope.$apply();
    });
    $scope.like = function(id){
        questionFactory.updateLikes(id, function(question){
            $scope.question = question;
            $scope.question.answers.reverse()
            $scope.$apply();
        });
    }
})
