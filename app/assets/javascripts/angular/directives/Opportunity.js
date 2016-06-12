function Opportunity(){
  return {
    restrict: 'E',
    templateUrl: 'directives/opportunity.html',
    transclude: true,
    scope: {
      opp: "=",
      delete: "&onDelete"
    }
  }
}

app.directive('opportunity', Opportunity);
