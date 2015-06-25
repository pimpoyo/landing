app.directive('appSlider', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appSlider.html'
  };
});
