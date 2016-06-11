app.controller('OpportunitiesController', OpportunitiesController);

function OpportunitiesController(OpportunitiesService, $location){
  var ctrl = this;

  ctrl.sumSales = function(){
    var total = 0;
    ctrl.opps.forEach(function(opp){
      if (opp.won){
        total += opp.amount
      }
    });
    ctrl.totalSales = total;
  }

  ctrl.getAllOpps = function(){
    OpportunitiesService.getAllOpps()
    .then(function(response){
      ctrl.opps = response.data.opportunities;
      console.log((ctrl.opps[0].created_at) )
      ctrl.sumSales();
    }, function(error){
        alert('Unable to get all opportunities! Error: ' + error.statusText);
    })
  }

  ctrl.deleteOpp = function(opp){
    OpportunitiesService.deleteOpp
    .then(function(resp){
      $location.path('opportunities');
    }, function(error){
      alert('Unable to delete opportunity! Error: ' + error.statusText);
    });
  }

  ctrl.closeSale = function(opp){
    var updatedOpp = {
      won : opp.won
    }
    OpportunitiesService.editOpp(updatedOpp, opp.id)
    .then(function(resp){
      ctrl.sumSales();
      $location.path('opportunities');
    });
  }

  ctrl.getAllOpps()
}
