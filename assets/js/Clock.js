(function () {
  
  /**
   * Clock
   * @param {DOM Node} element
   */
  var Clock = function (element) {
    if (element) {
      this.element = element;
    }
    this.elapsedTime = 0;
    this.isTicking = false;
  };
  Clock.prototype.start = function() {
    this.startTime = new Date();
    this.isTicking = true;
    this.tick();
  };
  Clock.prototype.tick = function() {
    var currentTime = new Date();
    this.elapsedTime = (currentTime.getTime() - this.startTime.getTime()) / 1000;
    if (this.element) {
      this.element.innerHTML = this.elapsedTime;
    }
    if (this.isTicking) {
      setTimeout(this.tick.bind(this), 50);
    }
  };
  Clock.prototype.stop = function() {
    this.isTicking = false;
  };

  window.Clock = Clock;

})();