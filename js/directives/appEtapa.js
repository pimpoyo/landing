app.directive('appEtapa', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appEtapa.html'
  };
});
