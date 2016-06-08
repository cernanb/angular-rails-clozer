var Opportunity = {
  template: [
		'<div class="opp-card">',
			'<a href="#" ui-sref="home.opportunity({id: ctrl.opp.id})"><h4>Opportunity</h4></a>',
      '<label>Client: </label>',
      ' {{ctrl.opp.client_name}} <br>',
			'<label>Product: </label>',
      ' {{ctrl.opp.product}} <br>',
			'<label>Amount: </label>',
      ' {{ctrl.opp.amount | currency:"$":0}} <br>',
      '<a href="#" ui-sref="home.edit({id: ctrl.opp.id})">Edit Opportunity</a>',
      '<ng-transclude></ng-transclude>',
		'</div>'
	].join(''),
  restrict: 'E',
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
    opp: "="
  }
}

app.component('opportunity', Opportunity);
