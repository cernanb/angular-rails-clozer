function ShowOpportunityController(OpportunitiesService, $stateParams){
  var ctrl = this;

  OpportunitiesService.getOpportunity($stateParams.id)
  .then(function(response){
    ctrl.opp = response.data.opportunity;
  });
}

app.controller('ShowOpportunityController', ShowOpportunityController);
