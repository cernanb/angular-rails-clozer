app.controller('OpportunitiesController', OpportunitiesController);

function OpportunitiesController(OpportunitiesService, $http, $location){
  var ctrl = this;

  OpportunitiesService.getOpportunities()
  .then(function(response){
    ctrl.opps = response.data.opportunities;
  });

  ctrl.deleteOpp = function(opp){
    $http.delete('http://localhost:3000/api/opportunities/' + opp.id)
    .then(function(resp){
      $location.path('opportunities');
    });
  }

  ctrl.closeSale = function(opp){
    var updatedOpp = {
      won : opp.won
    }
    OpportunitiesService.editOpp(updatedOpp, opp.id)
    .then(function(resp){
      $location.path('opportunities');
    });
  }
}
