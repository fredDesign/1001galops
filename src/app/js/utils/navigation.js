export function navbuilder (nav) {

    let el = document.getElementById('navbar-burger');

    let target = el.dataset.target;

    el.onclick = function () {
        const $target = document.getElementById(target);
        $target.classList.toggle('is-active');
    };

}

