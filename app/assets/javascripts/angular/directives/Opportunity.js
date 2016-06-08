var Opportunity = {
  template: [
		'<div class="opp-card">',
			'<h4>Opportunity</h4>',
      '<label>Client: </label>',
      ' {{ctrl.opp.client_name}} <br>',
			'<label>Product: </label>',
      ' {{ctrl.opp.product}} <br>',
			'<label>Amount: </label>',
      ' {{ctrl.opp.amount | currency:"$":0}} <br>',
		'</div>'
	].join(''),
  restrict: 'E',
  controllerAs: 'ctrl',
  bindings: {
    opp: "="
  }
}

app.component('opportunity', Opportunity);
