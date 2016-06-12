function Opportunity(){
  return {
    restrict: 'E',
    templateUrl: 'directives/opportunity.html',
    transclude: true,
    scope: { },
    controller: function(){
      
    },
    controllerAs: 'oppCtrl',
    bindToController: {
      opp: "=",
      delete: "&onDelete"
    }
  }
}

app.directive('opportunity', Opportunity);
