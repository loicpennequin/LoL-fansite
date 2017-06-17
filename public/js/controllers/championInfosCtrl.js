app.controller('championInfosCtrl', function($scope, $http, $timeout, $routeParams){
  $scope.champion = {};
  $scope.contentLoaded = false;
  $scope.skins = [];
  $scope.activeSkin = 0

  $http.get('http://localhost:8080/champions/' + $routeParams.id)
  .then(function(response){
    $scope.champion = response.data.content
    $scope.champion.skins.forEach(function(skin, key){
      $scope.skins.push(skin);
    });
    $timeout(function(){
      $scope.contentLoaded = true;
    },1000);
  });

  $scope.isSkinActive = function(skin){
    return (skin == $scope.activeSkin)
  };

  $scope.nextSkin = function(){
    if($scope.activeSkin == $scope.skins.length-1){
      $scope.activeSkin = 0;
    }else{
      $scope.activeSkin++;
    };
  }

  $scope.prevSkin = function(){
    if($scope.activeSkin == 0){
      $scope.activeSkin = $scope.skins.length-1;
    }else{
      $scope.activeSkin--;
    };
  }



  $scope.myInterval = 5000;
  $scope.noWrapSlides = true;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      id: currIndex++
    });
  };


  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }


});
