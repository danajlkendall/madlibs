var app = angular.module('madlibApp');

app.factory('madlibFactory',function(){

  var storyInfo = {};

  return {
    pass: pass,
    retrieveInfo: retrieveInfo

  };

  function pass(name, noun, month, animal, adjective1, adjective2, number1, number2){
    storyInfo.name = name,
    storyInfo.noun = noun,
    storyInfo.month = month,
    storyInfo.animal = animal,
    storyInfo.adjective1 = adjective1,
    storyInfo.adjective2 = adjective2,
    storyInfo.number1 = number1,
    storyInfo.number2 = number2
    console.log(storyInfo);
  }

  function retrieveInfo () {
    return storyInfo;
  }

})
