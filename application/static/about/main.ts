import './main.css';

document
    .querySelector('#api')
    .addEventListener('click', e => {
        const $userarea = document.querySelector('#userarea');

        $userarea.innerHTML = 'Loading...';

        fetch('/user')
            .then(response => response.json())
            .then(user => {

                $userarea.innerHTML = JSON.stringify(user, null, 4);
                setTimeout(() => {
                    $userarea.innerHTML = '';
                }, 3000);

            });
    }, false);