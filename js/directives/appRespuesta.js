app.directive('appRespuesta', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appRespuesta.html'
  };
});
