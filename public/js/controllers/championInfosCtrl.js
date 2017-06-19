app.controller('championInfosCtrl', function($scope, $http, $timeout, $routeParams){
  $scope.champion = {};
  $scope.skins = [];
  $scope.selectedSpellName = "";
  $scope.selectedSpell = "";
  $scope.lore = "";
  $scope.loading = false;

  $http.get('http://localhost:8080/champions/' + $routeParams.id)
  .then(function(response){
    $scope.champion = response.data.content
    $scope.champion.skins.forEach(function(skin, key){
      $scope.skins.push(skin);
    });
    $scope.lore = $scope.champion.lore;
    $scope.replaceSpellsVariables();
    $scope.loading = true;
  });

  $scope.selectSpell = function(spell){
    $scope.selectedSpell = spell.tooltip;
    $scope.selectedSpellName = spell.name;
  }

  $scope.selectPassive = function(){
    $scope.selectedSpell = $scope.champion.passive.description;
    $scope.selectedSpellName = $scope.champion.passive.name + " (passive)";
  }

  $scope.replaceSpellsVariables = function(){
    $scope.champion.spells.forEach(function(spell,key){
      spell.tooltip = spell.tooltip.replace("=&bsol;", "=").replace('&bsol;"', '"')
      spell.effectBurn.forEach(function(effect,key){
        spell.tooltip = spell.tooltip.replace("{{ e" + key + " }}", effect)
      });
      if (spell.vars){
        spell.vars.forEach(function(spellVar,key){
          let varkey = spellVar.key;
          spell.tooltip = spell.tooltip.replace("{{ " + varkey + " }}", spellVar.coeff[0] + "*AP")
        });
      }
    });
  }
});
