import './main.css';

const msg$ = <HTMLElement>document.querySelector('#msg');


msg$.addEventListener('mouseenter', (e: Event) => {
    (<HTMLElement>e.target).style.fontSize = '30px';
}, false);

msg$.addEventListener('mouseleave', (e: Event) => {
    (<HTMLElement>e.target).style.fontSize = '16px';
}, false);