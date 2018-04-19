// GET FORMAL DELIVERY DATA THROUGH API
document.getElementById('refresh').addEventListener('click', loadUsers);
function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cmcodevapi.azurewebsites.net/api/persons', true);

    xhr.onload = function() {
    
        if(this.status == 200) {
            var users = JSON.parse(this.responseText);

            var output = '';
            for(i in users){
                output +=
                '<div class="user">' +
                '<ul>' +
                '<li>Name: ' + users[i].Name + '</li>' +
                '<li>Customer Number: ' + users[i].PartitionKey + '</li>' +
                '</ul>' +
                '</div>' +
                '</div>';
            }

            document.getElementById('content').innerHTML = output;
        }
    }

    xhr.send();
}