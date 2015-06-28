app.directive('appForm', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appForm.html'
  };
});
