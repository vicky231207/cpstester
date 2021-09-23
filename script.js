const clicksEl = document.querySelector('#clicks');
const timeEl = document.querySelector('#time');
const cpsEl = document.querySelector('#cps');

const clickarea = document.querySelector('#clickarea');

let clicks = 0;
let started = false;
let time = 0;
let maxTime = 1;

const cpstimeEl = document.querySelector('#cpstime');
const slider = document.querySelector('input');

slider.oninput = () => {
    cpstimeEl.innerText = slider.value + 's';
    maxTime = slider.value;
}


const c = () => {
    if ( !started ) {
        document.querySelector('#cpstime-section').classList.add('hide');
        clickarea.textContent = 'Click Here';
        started = true;
        setInterval ( timer, 10 );
    }
    
    clicks++;
    clicksEl.textContent = 'Clicks: ' + clicks;
}

clickarea.addEventListener('click', c);

const timer = () => {
    time++;
    
    if ( time / 100 >= maxTime ) {
        clearInterval();

        clickarea.removeEventListener('click', c);

        time = timeMax * 100;
        const cps = Math.round(clicks / maxTime);

        localStorage.setItem('cps', cps);

        window.location.replace("/cps");
    }
 
    timeEl.textContent = 'Time: ' + time / 100;

    const cps = Math.round(clicks / (time / 100) * 100) / 100;
    cpsEl.textContent = 'Cps: ' + cps;

}
