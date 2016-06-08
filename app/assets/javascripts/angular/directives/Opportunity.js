var Opportunity = {
  templateUrl: 'directives/opportunity.html',
  restrict: 'E',
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
    opp: "="
  }
}

app.component('opportunity', Opportunity);
