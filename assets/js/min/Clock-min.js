!function(){var i=function(i){i&&(this.element=i),this.elapsedTime=0,this.isTicking=!1};i.prototype.start=function(){this.startTime=new Date,this.isTicking=!0,this.tick()},i.prototype.tick=function(){var i=new Date;this.elapsedTime=(i.getTime()-this.startTime.getTime())/1e3,this.element&&(this.element.innerHTML=this.elapsedTime),this.isTicking&&setTimeout(this.tick.bind(this),50)},i.prototype.stop=function(){this.isTicking=!1},window.Clock=i}();