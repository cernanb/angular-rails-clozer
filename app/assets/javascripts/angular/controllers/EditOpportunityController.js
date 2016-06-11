function EditOpportunityController(OpportunitiesService, $stateParams, $location){
  var ctrl = this;

  ctrl.getOpp = function(id){
    OpportunitiesService.getOpp(id)
    .then(function(resp){
      ctrl.opp = resp.data.opportunity
    });
  }

  ctrl.editOpp = function(){
    var updatedOpp = {
      product: ctrl.opp.product,
      amount: ctrl.opp.amount,
      client_name: ctrl.opp.client_name
    }

    OpportunitiesService.editOpp(updatedOpp, $stateParams.id)
    .then(function(response){
      $location.path('opportunity/' + response.data.opportunity.id);
    }, function(error){
        alert('Error updating opportunity: ' + error.statusText);
    })
  }

  ctrl.getOpp($stateParams.id)
}

app.controller('EditOpportunityController', EditOpportunityController);
