document.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


keys.forEach(key => key.addEventListener('click', playAudio));
function playAudio(e) {
    let key = e.target;
    let audio = document.getElementById(key.dataset.key);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}