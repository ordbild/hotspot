var gridWidth = 100;
var gridHeight = 200;

var cards = document.querySelectorAll('.box');
var answers = document.querySelectorAll('.answer');
var correctAnswers = 0;
var numberOfAnswers = 0;

[].forEach.call(cards, function (card) {
  Draggable.create(card, {
    type: "x,y",
    edgeResistance:0.65,
    bounds:".professions",
    throwProps:true,
    snap: {
      x: function(endValue) {
          return Math.round(endValue / gridWidth) * gridWidth;
      },
      y: function(endValue) {
          return Math.round(endValue / gridHeight) * gridHeight;
      }
    },
    onDragEnd: function (e) {
      [].forEach.call(answers, function (answer) {
        if (this.hitTest(answer, 50)) {
          numberOfAnswers++;
          document.getElementById('number-of-answers').innerHTML = numberOfAnswers;
          if (answer.getAttribute('data-pair') === this.target.getAttribute('data-pair')) {
            correctAnswers++;
          }
          //console.log(numberOfAnswers);
          if (numberOfAnswers === answers.length) {
            console.log('Antal rätt: ' + correctAnswers);
            var p = document.createElement('p');
            p.textContent = 'Antal rätt: ' + correctAnswers;
            document.getElementById('playground').appendChild(p);
          }
          this.disable();
        }
      }.bind(this));
    },
  });
});
