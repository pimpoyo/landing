app.directive('appPilares', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appPilares.html'
  };
});
