app.filter('championsTagsFilter', function () {
  return function (champions, tags) {
    var filtered = [];
    for (let i = 0; i < champions.length; i++) {
        var champion = champions[i];
        tags.forEach(function(tag, index){
          for (let j = 0 ; j < champion.tags.length; j++){
              let champTag = champion.tags[j];
              if (champTag == tag){
                  filtered.push(champion)
              }
          }
        });
    }
    filtered = Array.from(new Set(filtered));
    return filtered
  };
});
