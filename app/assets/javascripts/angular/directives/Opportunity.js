function Opportunity(){
  return {
    restrict: 'E',
    templateUrl: 'directives/opportunity.html',
    transclude: true,
    replace: true,
    controller: function(){

    },
    controllerAs: 'oppCtrl',
    bindToController: {
      opp: "=",
      delete: "&onDelete"
    },
    link: function(scope, element, attrs){
    }
  }
}

app.directive('opportunity', Opportunity);
