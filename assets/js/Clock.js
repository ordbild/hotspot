(function () {
  
  /**
   * Clock
   * @param {DOM Node} element
   */
  var Clock = function (element) {
    if (element) {
      this.element = element;
    }
    this.reset();
  };
  Clock.prototype.start = function() {
    this.startTime = new Date();
    this.isTicking = true;
    this.tick();
  };
  Clock.prototype.tick = function() {
    var currentTime = new Date();
    this.elapsedTime = (currentTime.getTime() - this.startTime.getTime()) / 1000;
    
    var minutes = Math.floor(this.elapsedTime / 60);
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    
    var seconds = this.elapsedTime % 60;
    seconds = parseFloat(Math.round(seconds * 100) / 100).toFixed(2);

    if (this.element) {
      this.element.innerHTML = minutes + '.' + seconds;
    }
    if (this.isTicking) {
      setTimeout(this.tick.bind(this), 50);
    }
  };
  Clock.prototype.stop = function() {
    this.isTicking = false;
  };
  Clock.prototype.reset = function() {
    this.elapsedTime = 0;
    this.isTicking = false;
  };

  window.Clock = Clock;

})();