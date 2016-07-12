function NotesController(NotesService, $location, $stateParams, $state){
  var ctrl = this;

  ctrl.addNote = function(oppCtrl) {

    var newNote = {
      body: ctrl.body
    }
    NotesService.addNote($stateParams.id, newNote)
    .then(function(resp){
      oppCtrl.opp.notes.push(resp.data)
      ctrl.body = "";
    });
  }
}

app.controller('NotesController', NotesController);
