class Timer {
  constructor(time) {
    this.timeLeft = time;
    this.tick = function () {
      if (!this.timeLeft) {
        return;
      }

      this.timeLeft -= 1;
    };
  }
}

export default Timer;
