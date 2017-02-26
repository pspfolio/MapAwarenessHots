var minimapReminder = (function() {

  // interval in seconds
  var defaultInterval = 6;
  var audio = new Audio('wisp.wav');
  var beepInterval;

  function init() {
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');

    startBtn.onclick = function() {
      startTimer();
      startBtn.disabled = true;
      stopBtn.disabled = false;
    }

    stopBtn.onclick = function() {
      clearInterval(beepInterval);
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }
  }

  function startTimer() {
    var value = document.getElementById('input-interval').value;
    var interval = value && value > 0 ? value : defaultInterval;
    initInterval(interval);
  }

  function initInterval(value) {
    clearInterval(beepInterval);
    var milliseconds = (value * 1000);
    beepInterval = setInterval(playSound, milliseconds);
  }

  function playSound() {
    audio.play();
  }

  return {
    init: init
  }

}());

minimapReminder.init();
