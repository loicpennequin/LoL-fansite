app.controller('championsCtrl', function($scope, $http, $timeout){
    $scope.championsTags=[];
    $scope.selectedTags = [];
    $scope.champions=[];
    $scope.contentLoaded = false;

    //toggle function
    $scope.toggle = function(toggle){
      toggle = !toggle;
    }

    //getting champion's list
    $http.get('http://localhost:8080/champions')
    .then(function(response){
      var champions = response.data.list.data,
          championsTags = [];
      $scope.champions = Object.keys(champions).map(function(key) {
        return champions[key];
      });
      $scope.champions.forEach(function(champion, index){
        championsTags = championsTags.concat(champion.tags)
      });
      $scope.championsTags = Array.from(new Set(championsTags))
      $scope.selectedTags = Array.from(new Set(championsTags))
      $timeout(function(){
        $scope.contentLoaded = true;
      },1500);

    });

    //select tags
    $scope.selectTag = function(tag){
      function isSelected(element,index){
        return element == tag
      }
      if ( $scope.selectedTags.some(isSelected) ){
        var index = $scope.selectedTags.indexOf(tag);
        $scope.selectedTags.splice(index, 1);
      } else {
        $scope.selectedTags.push(tag);
      }
    }

    $scope.isTagSelected = function(tag){
      var result;
      function isSelected(element,index){
        return element == tag
      }
      if ( $scope.selectedTags.some(isSelected) ){
        result = true;
      }
      return result;
    }

})
