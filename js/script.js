document.getElementById('refresh').addEventListener('click', loadUsers);
  
    function loadUsers() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://cmcodevapi.azurewebsites.net/api/persons', true);

      xhr.onload = function() {
        if(this.status == 200) {
          var users = JSON.parse(this.responseText);

          // console.log(users);

          var output = '';
          for(i in users){
            output +=
              '<div class="user">' +
              '<ul>' +
              '<li>Name: ' + users[i].Name + '</li>' +
              '<li>Customer Number: ' + users[i].PartitionKey + '</li>' +
              '</ul>' +
              '</div>';
          }
          document.getElementById('users').innerHTML = output;
        }
      }
      xhr.send();
    }