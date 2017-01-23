(function() {
    'use strict';

    const userarea = document.querySelector('#userarea');

    document
        .querySelector('#api')
        .addEventListener('click', function() {
            userarea.innerHTML = 'Loading...';
            fetch('/user')
                .then(function(response) {
                    return response.json();
                })
                .then(function(user) {
                    userarea.innerHTML = JSON.stringify(user, null, 4);
                    setTimeout(function() {
                        userarea.innerHTML = '';
                    }, 3000);
                });
        }, false);

}());
