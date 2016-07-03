function NewOpportunityController(OpportunitiesService, $location){
  var ctrl = this;

  ctrl.addOpp = function(){
    var newOpp = {
      product: ctrl.opp.product,
      amount: ctrl.opp.amount,
      client_name: ctrl.opp.client_name
    }
    OpportunitiesService.addOpp(newOpp)
    .then(function(resp){
      $location.path('opportunity/' + resp.data.opportunity.id);
    },
      function(error){
        alert('Cannot create opportunity: ' + error.statusText);
      }
    );

  }
}

app.controller('NewOpportunityController', NewOpportunityController);
