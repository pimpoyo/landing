app.directive('appFooter', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appFooter.html'
  };
});
