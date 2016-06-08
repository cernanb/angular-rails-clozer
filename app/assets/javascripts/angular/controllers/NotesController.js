function NotesController($http, $location, $stateParams, $state){
  var ctrl = this;

  ctrl.addNote = function() {
    var newNote = {
      body: ctrl.body
    }
    $http.post('http://localhost:3000/api/opportunities/' + $stateParams.id + '/notes', newNote)
    .then(function(resp){
      $state.go($state.current, {}, {reload:true});
    });
  }
}

app.controller('NotesController', NotesController);
