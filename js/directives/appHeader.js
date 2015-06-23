app.directive('appHeader', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appHeader.html'
  };
});
