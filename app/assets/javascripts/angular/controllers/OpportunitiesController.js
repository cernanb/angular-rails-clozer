app.controller('OpportunitiesController', OpportunitiesController);

function OpportunitiesController(OpportunitiesService, $location){
  var ctrl = this;

  ctrl.closedSales = function(){
    if (ctrl.closed){
      ctrl.visibleOpps = ctrl.opps.filter(function(opp){
        if (opp.won){
          return opp;
        }
      });
    }
    else {
      ctrl.visibleOpps = ctrl.opps;
    }
  }

  ctrl.closeSale = function(opp){
    var updatedOpp = {
      won : opp.won
    }
    OpportunitiesService.editOpp(updatedOpp, opp.id)
    .then(function(resp){
      ctrl.sumSales();
      ctrl.closedSales();
      // $location.path('opportunities');
    });
  }

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
      ctrl.sumSales();
      ctrl.visibleOpps = ctrl.opps;

    }, function(error){
        alert('Unable to get all opportunities! Error: ' + error.statusText);
    })
  }

  ctrl.deleteOpp = function(opp){
    OpportunitiesService.deleteOpp(opp)
    .then(function(resp){
      var index = ctrl.opps.indexOf(opp);
      ctrl.opps.splice(index, 1);
      ctrl.visibleOpps =  ctrl.opps;
    }, function(error){
      alert('Unable to delete opportunity! Error: ' + error.statusText);
    });
  }

  ctrl.getAllOpps();
}
