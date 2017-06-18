app.controller('championInfosCtrl', function($scope, $http, $timeout, $routeParams){
  $scope.champion = {};
  $scope.skins = [];
  $scope.selectedSpell = "";

  $http.get('http://localhost:8080/champions/' + $routeParams.id)
  .then(function(response){
    $scope.champion = response.data.content
    $scope.champion.skins.forEach(function(skin, key){
      $scope.skins.push(skin);
    });
  });

  $scope.selectSpell = function(spell){
    $scope.selectedSpell =  spell.name + " : " + spell.sanitizedDescription;
  }
});
