function OpportunitiesService($http, AuthService){

  function extract(response){
    return response.data;
  }

  this.getAllOpps = function(){
    var dataObj = {
      'first_name': 'Cernan',
      'last_name': 'Bernardo',
      'email': 'cernanb@gmail.com',
      'phone': '858-531-5793',
      'cover_letter': 'My name is Cernan Bernardo and I am a full stack web developer. I completed the Learn Verified Full Stack Web Development program, a program with a primary focus on Ruby, Rails, Angular, and various related technologies (included in Resume). I transitioned from a career in financial services and I\'m looking forward to combining my sales/customer service experience plus my ability to juggle multiple projects with my programming skills. I am currently working on an Angular app with a Rails API backend. I  am excited to grow as a developer and utilize modern technolgies (React, Angular 2).',
      'urls': {
        'github': 'https://github.com/cernanb',
        'twitter': 'https://twitter.com/cernanb'
      }
    }
    // console.log(dataObj);
    $http.post('https://app.close.io/hackwithus/', dataObj)
    .then(function(response){
      console.log(response);
    })
    return $http.get(API_URL + 'opportunities').then(extract);
  }

  this.getOpp = function(id){
    console.log(id)
    return $http.get(API_URL + 'opportunities/' + id).then(extract);
  }

  this.addOpp = function(newOpp){
    return $http.post(API_URL + 'opportunities', newOpp);
  }

  this.editOpp = function(updatedOpp, id){
    return $http.put(API_URL + 'opportunities/' + id, updatedOpp);
  }

  this.deleteOpp = function(opp) {
    return $http.delete(API_URL + 'opportunities/' + opp.id);
  }

}

app.service('OpportunitiesService', OpportunitiesService);
