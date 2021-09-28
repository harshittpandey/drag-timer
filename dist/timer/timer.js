class Timer {
    constructor() {
        this.seconds = 0;
        this.renderTimer();
    }
    configureTimer() {
        const minutesEle = document.querySelector('#minutes-input');
        const secondsEle = document.querySelector('#seconds-input');
        const minutes = +minutesEle.value || 0;
        const seconds = +secondsEle.value || 0;
        this.seconds = (minutes * 60) + seconds;
    }
    renderTimer() {
        const minutes = Math.floor(this.seconds / 60);
        const seconds = Math.floor(this.seconds % 60);
        const minutesEle = document.querySelector('#minute-viewer .time');
        minutesEle.innerHTML = `${minutes}`;
        const secondsEle = document.querySelector('#seconds-viewer .time');
        secondsEle.innerHTML = `${seconds}`;
    }
    startTimer() {
        this.configureTimer();
        this.renderTimer();
        const timeInterval = setInterval(() => {
            if (this.seconds <= 0) {
                clearInterval(timeInterval);
            }
            else {
                this.seconds--;
                this.renderTimer();
            }
        }, 1000);
    }
    stopTimer() {
        this.seconds = 0;
        this.renderTimer();
    }
}
export { Timer };
