function ShowOpportunityController(OpportunitiesService, $stateParams, Auth){
  var ctrl = this;

  ctrl.getOpp = function(id){
    OpportunitiesService.getOpp(id)
    .then(function(response){
      // console.log(response)
      ctrl.opp = response.opportunity;
    }, function(error){
        alert('Unable to get opportunity: ' + error.statusText);
    })
  }

  ctrl.getOpp($stateParams.id);
}

app.controller('ShowOpportunityController', ShowOpportunityController);
