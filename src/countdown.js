class CountdownTimer {
  startCountdown(endTime) {
    setInterval(() => {
      const timeRemaining = this.getTimeLeft(endTime);
      // TODO: clean up reptitive code
      const lastTenSeconds = (
        timeRemaining.days === 0 &&
        timeRemaining.hours === 0 &&
        timeRemaining.minutes === 0 &&
        timeRemaining.seconds < 11
      );
      const happyNewYear = (
        timeRemaining.days === 0 &&
        timeRemaining.hours === 0 &&
        timeRemaining.minutes === 0 &&
        timeRemaining.seconds === 0
      );
      this.updateTime(timeRemaining);
      if (lastTenSeconds) {
        document.getElementById('seconds').style.color = 'red';
      }
      if (happyNewYear) {
        alert('Happy New Year!');
      }
    }, 1000);
  }
  updateTime(remainingTime) {
    const zeros = this.addZeros(remainingTime);
    document.getElementById('days').innerHTML = `<h2>${zeros.days}${remainingTime.days}</h2>`;
    document.getElementById('hours').innerHTML = `<h2>${zeros.hours}${remainingTime.hours}</h2>`;
    document.getElementById('minutes').innerHTML = `<h2>${zeros.minutes}${remainingTime.minutes}</h2>`;
    document.getElementById('seconds').innerHTML = `<h2>${zeros.seconds}${remainingTime.seconds}</h2>`;
  }
  addZeros(time) {
    const result = {};
    for (let key in time) {
      if (time[key] < 10) {
        result[key] = 0;
      } else {
        result[key] = '';
      }
    }
    return result;
  }
  getTimeLeft(endTime) {
    const timeLeft = endTime - new Date();
    return {
      days: Math.floor(
        timeLeft / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        ( timeLeft / (1000 * 60 * 60) ) % 24
      ),
      minutes: Math.floor(
        ( timeLeft / 1000 / 60 ) % 60
      ),
      seconds: Math.floor(
        ( timeLeft / 1000 ) % 60
      ),
    };
  }
}

const newYear = new CountdownTimer();

newYear.startCountdown(
  new Date('January 01, 2017 00:00:00')
);
