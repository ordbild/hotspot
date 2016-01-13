(function (window, document, undefined) {
  'use strict';

  var clock = new Clock(document.querySelector('#time span'));
  
  var MatchMaker = (function () {

    var elements;

    var correctAnswers = 0;
    var numberOfAnswers = 0;

    var checkAnswer = function (profession, description) {
      numberOfAnswers++;
      
      if (profession.getAttribute('data-pair') === description.getAttribute('data-pair')) {
        correctAnswers++;
      }

      if (numberOfAnswers === elements.professions.length) {
        gameOver();
      }

    }; // checkAnswer

    var gameOver = function () {
      clock.stop();
      var p = document.createElement('p');
      p.textContent = 'Antal rätt: ' + correctAnswers;
      document.getElementById('playground').appendChild(p);
    };

    var _draggableGrid = {
      gridWidth: 180,
      gridHeight: 230,

      create: function (descriptions) {
        [].forEach.call(descriptions, this.makeDraggable.bind(this));        
      },

      makeDraggable: function (description) {
        var _this = this;
        Draggable.create(description, {
          type: 'x,y',
          edgeResistance: 0.65,
          bounds: '.game-board',
          throwProps:true,
          snap: {
            x: function(endValue) {
              return Math.round(endValue / _this.gridWidth) * _this.gridWidth;
            },
            y: function(endValue) {
              return Math.round(endValue / _this.gridHeight) * _this.gridHeight;
            }
          },
          onDragEnd: function (e) {
            [].forEach.call(elements.professions, function (profession) {
              if (this.hitTest(profession, 50)) {
                checkAnswer(profession, this.target);
                this.disable();
              }
            }.bind(this));
          },
        });
      }, // makeDraggable

    }; // _draggableGrid

    var _createElements = function (professions) {
      var elements = {
        professions: [],
        descriptions: []
      };
      var gameBoard = document.querySelector('.game-board');
      for (var i = 0; i < professions.length; i++) {
        var profession = new Profession(i, professions[i].profession);
        elements.professions.push(profession.element);
        gameBoard.appendChild(profession.element);
      
        var description = new Description(i, professions[i].description);
        elements.descriptions.push(description.element);
      };
      return elements;
    };

    var ProfessionsCollection = function (professions) {
      this.professions = professions;
      this.elements = this.createElements();
    };
    ProfessionsCollection.prototype.createElements = function() {
      var elements = [];
      for (var i = 0; i < this.professions.length; i++) {
        var profession = new Profession(this.professions[i].profession);
        elements.push(profession.element);
      };
      return elements;
    };

    var randomProfessions = {
      professions: [],
      addedIndexes: [],
      get: function () {
        var randomIndex = new randomArrayIndex(gameData);
        while(this.professions.length < 5) {
          var index = randomIndex.get();
          this.professions.push(gameData[index]);
        }
        return this.professions;
      }
    }; // randomProfessions

    var _addDescriptionsToGameBoard = function () {
      var gameBoard = document.querySelector('.game-board');
      var randomIndex = new randomArrayIndex(elements.descriptions);
      while (randomIndex.addedIndexes.length < 5) {
        var index = randomIndex.get();
        elements.descriptions[index].style.left = ((randomIndex.addedIndexes.length - 1) * 180) + 'px';
        
        elements.descriptions[index].addEventListener('click', function (event) {
          this.querySelector('.card').classList.toggle('flip');
        });

        gameBoard.appendChild(elements.descriptions[index]);
      }
    }

    return {
      
      professions: randomProfessions.get(),

      events: function () {
        document.querySelector('button').addEventListener('click', function (event) {
          this.startGame();
        }.bind(this));
      },

      init: function () {
        var professionsCollection = new ProfessionsCollection(this.professions);
        console.log(professionsCollection);

        elements = _createElements(this.professions);        
        _draggableGrid.create(elements.descriptions);
        _addDescriptionsToGameBoard();
        this.events();
      },

      startGame: function () {
        clock.start();
      },

    };

  })(); // MatchMaker

  MatchMaker.init();

})(window, document);


