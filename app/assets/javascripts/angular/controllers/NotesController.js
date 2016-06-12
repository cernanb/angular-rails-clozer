function NotesController(NotesService, $location, $stateParams, $state){
  var ctrl = this;

  ctrl.addNote = function() {
    var newNote = {
      body: ctrl.body
    }
    NotesService.addNote($stateParams.id, newNote)
    .then(function(resp){
      $state.go($state.current, {}, {reload:true});
    });
  }
}

app.controller('NotesController', NotesController);
