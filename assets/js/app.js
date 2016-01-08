(function (window, document, undefined) {
  'use strict';

  var gameData = [
    {
      profession: 'Städare',
      description: 'Du gillar att städa',
      image: ''
    },
    {
      profession: 'Golfare',
      description: 'Du gillar att spela golf',
      image: ''
    },
    {
      profession: 'Läkare',
      description: 'Du räddar liv',
      image: ''
    },
    {
      profession: 'Polis',
      description: 'Du är bra på att lösa mordgåtor',
      image: ''
    },
    {
      profession: 'Lärare',
      description: 'Du är duktig på att lära ut',
      image: ''
    },
    {
      profession: 'Legobyggare',
      description: 'Du bygger saker av små plastbitar.',
      image: ''
    },
    {
      profession: 'Skådespelare',
      description: 'Du låtsas att du är någon annan',
      image: ''
    }
  ];

  var clock = new Clock(document.querySelector('#time span'));
  
  var MatchMaker = (function () {
    // Elements
    var descriptions = document.querySelectorAll('.description');
    var professions = document.querySelectorAll('.profession');
    
    var correctAnswers = 0;
    var numberOfAnswers = 0;

    var _draggableGrid = {
      gridWidth: 100,
      gridHeight: 200,

      create: function () {
        [].forEach.call(descriptions, this.makeDraggable.bind(this));        
      },

      makeDraggable: function (description) {
        var _this = this;
        Draggable.create(description, {
          type: "x,y",
          edgeResistance:0.65,
          bounds:".professions",
          throwProps:true,
          snap: {
            x: function(endValue) {
              return Math.round(endValue / _this.gridWidth) * _this.gridWidth;
            },
            y: function(endValue) {
              return Math.round(endValue / _this.gridHeight) * _this.gridHeight;
            }
          },
          onDragStart: function (e) {
            if (numberOfAnswers === 0) {
              clock.start();
            }
          },
          onDragEnd: function (e) {
            [].forEach.call(professions, function (profession) {
              
              if (this.hitTest(profession, 50)) {
                _this.checkAnswer(profession, this.target);
                this.disable();
              }

            }.bind(this));
          },
        });
      }, // makeDraggable

      checkAnswer: function (profession, description) {
        numberOfAnswers++;
        
        document.getElementById('number-of-answers').innerHTML = numberOfAnswers;
        
        if (profession.getAttribute('data-pair') === description.getAttribute('data-pair')) {
          correctAnswers++;
        }

        if (numberOfAnswers === professions.length) {
          this.gameOver();
        }

      }, // checkAnswer

      gameOver: function () {
        clock.stop();
        var p = document.createElement('p');
        p.textContent = 'Antal rätt: ' + correctAnswers;
        document.getElementById('playground').appendChild(p);
      }

    };
    

    var _professions = {
      professions: [],
      addedIndexes: [],
      add: function () {
        while(this.professions.length < 5) {
          var randomIndex = this.getRandomIndex();
          this.professions.push(gameData[randomIndex]);
        }
      }, 
      getRandomIndex: function () {
        var randomIndex = this.randomNumberBetween(0, (gameData.length-1));
        
        var indexAlreadyUsed = false;
        for (var i = this.addedIndexes.length - 1; i >= 0; i--) {
          if (this.addedIndexes[i] === randomIndex) {
            indexAlreadyUsed = true;
            break;
          }
        }
        
        if (indexAlreadyUsed) {
          return this.getRandomIndex();
        } else {
          this.addedIndexes.push(randomIndex);
        }
        return randomIndex;
      },
      randomNumberBetween: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    };
    
    return {
      init: function () {
        _professions.add();
        _draggableGrid.create();
      }
    };

  })();

  MatchMaker.init();

})(window, document);


