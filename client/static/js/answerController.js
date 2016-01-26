myApp.controller('newAnswerController', function(questionFactory, loginFactory, $scope, $routeParams, $location){
    $scope.question;
    $scope.answer;
    $scope.details;

    questionFactory.getQuestion($routeParams.id, function(question){
        $scope.question = question;
        $scope.$apply();
    });

    $scope.submit = function(){
        if ($scope.answer.length >= 5 && $scope.details) {
            questionFactory.addAnswer($routeParams.id, {answer: $scope.answer, details: $scope.details, user: loginFactory.user}, function(){
                $scope.$apply(function(){
                    $location.path("/show/"+$routeParams.id);
                });
            })
        }
        else if ($scope.answer.length >= 5) {
            questionFactory.addAnswer($routeParams.id, {answer: $scope.answer, user: loginFactory.user}, function(){
                $scope.$apply(function(){
                    $location.path("/show/"+$routeParams.id);
                });
            })
        }
        else {
            alert("Error with input.");
        }
    }
})

