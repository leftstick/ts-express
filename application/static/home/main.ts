import './main.css';

const msg$ = <HTMLElement>document.querySelector('#msg');


msg$.addEventListener('mouseenter', function (e: Event) {
    this.style.fontSize = '30px';
}, false);

msg$.addEventListener('mouseleave', function (e: Event) {
    this.style.fontSize = '16px';
}, false);