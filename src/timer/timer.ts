
class Timer {
  seconds: number
  constructor () {
    this.seconds = 0
    this.renderTimer()
  }
  private configureTimer () {
    const minutesEle = (document.querySelector('#minutes-input')! as HTMLInputElement)
    const secondsEle = (document.querySelector('#seconds-input')! as HTMLInputElement)
    const minutes = +minutesEle.value || 0
    const seconds = +secondsEle.value || 0
    this.seconds = (minutes * 60) + seconds
  }
  private renderTimer (): void { 
    const minutes = Math.floor(this.seconds / 60)
    const seconds = Math.floor(this.seconds % 60)
    const minutesEle = (document.querySelector('#minute-viewer .time')! as HTMLSpanElement)
    minutesEle.innerHTML = `${minutes}`
    const secondsEle = (document.querySelector('#seconds-viewer .time')! as HTMLSpanElement)
    secondsEle.innerHTML = `${seconds}`
  }
  startTimer (): void {
    this.configureTimer()
    this.renderTimer()
    const timeInterval = setInterval(() => {
      if (this.seconds <= 0) {
        clearInterval(timeInterval);
      } else {
        this.seconds--
        this.renderTimer()
      }
    }, 1000)
  }
  stopTimer (): void {
    this.seconds = 0
    this.renderTimer()
  }
}

export { Timer }