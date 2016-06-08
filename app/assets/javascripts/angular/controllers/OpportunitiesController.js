app.controller('OpportunitiesController', OpportunitiesController);

function OpportunitiesController(OpportunitiesService){
  var ctrl = this;

  OpportunitiesService.getOpportunities()
  .then(function(response){
    ctrl.opps = response.data.opportunities;
  });

  // ctrl.opps = [
  //   {
  //     product: "Life Insurance",
  //     amount: 1000,
  //     client_name: "John Smith",
  //     notes: [
  //       {
  //         body: "I sent information to John and will call him in a couple of days",
  //         opportunity_id: 1,
  //         created_at: "2016-06-06T07:19:37.687Z",
  //         updated_at: "2016-06-06T07:19:37.687Z"
  //       }
  //     ]
  //   },
  //   {
  //     product: "Annuity",
  //     amount: 500,
  //     client_name: "Jack Ramsey",
  //     notes: [ ]
  //   }
  // ]
}
