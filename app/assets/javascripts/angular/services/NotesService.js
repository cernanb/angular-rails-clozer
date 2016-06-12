function NotesService($http){
  
  this.addNote = function(oppId, newNote){
    return $http.post(API_URL + 'opportunities/' + oppId + '/notes', newNote)
  }
}

app.service('NotesService', NotesService);
