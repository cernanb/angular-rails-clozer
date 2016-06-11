var Opportunity = {
  templateUrl: 'directives/opportunity.html',
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
    opp: "="
  }
}

app.component('opportunity', Opportunity);
