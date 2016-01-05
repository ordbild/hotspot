var gridWidth = 100;
var gridHeight = 200;

var cards = document.querySelectorAll('.box');

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
      //e.target.setAttribute('data-disabled', 'true');
      [].forEach.call(document.querySelectorAll('.answer'), function (answer) {
        if (this.hitTest(answer, 20)) {
          this.disable();
        }
      }.bind(this));
    },
  });
});
