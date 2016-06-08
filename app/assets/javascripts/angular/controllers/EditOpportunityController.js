function EditOpportunityController(OpportunitiesService, $stateParams, $location){
  var ctrl = this;

  OpportunitiesService.getOpportunity($stateParams.id)
  .then(function(resp){
    ctrl.opp = resp.data.opportunity
  });

  ctrl.editOpp = function(){
    var updatedOpp = {
      product: ctrl.opp.product,
      amount: ctrl.opp.amount,
      client_name: ctrl.opp.client_name
    }

    OpportunitiesService.editOpp(updatedOpp, $stateParams.id)
    .then(function(resp){
      $location.path('opportunity/' + resp.data.opportunity.id);
    });

  }

}

app.controller('EditOpportunityController', EditOpportunityController);
