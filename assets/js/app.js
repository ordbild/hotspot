(function (window, document, undefined) {
  'use strict';

  var clock = new Clock(document.querySelector('#time span'));
  
  var MatchMaker = (function () {

    var elements;

    var correctAnswers = 0;
    var numberOfAnswers = 0;

    var checkAnswer = function (profession, description) {
      numberOfAnswers++;
      
      document.getElementById('number-of-answers').innerHTML = numberOfAnswers;
      
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
      gridWidth: 100,
      gridHeight: 200,

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
          onDragStart: function (e) {
            if (numberOfAnswers === 0) {
              clock.start();
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

    var _createElements = function () {
      var elements = {
        professions: [],
        descriptions: []
      };
      var gameBoard = document.querySelector('.game-board');
      for (var i = 0; i < _professions.professions.length; i++) {
        var profession = document.createElement('div');
        profession.innerHTML = '<p>' + _professions.professions[i].profession + '</p>';
        profession.style.left = (i * 100) + 'px';
        profession.setAttribute('data-pair', i);
        profession.classList.add('profession');
        elements.professions.push(profession);
        gameBoard.appendChild(profession);
      
        var description = document.createElement('div');
        description.innerHTML = '<p>' + _professions.professions[i].description + '</p>';
        description.setAttribute('data-pair', i);
        description.classList.add('description');
        elements.descriptions.push(description);
      };
      return elements;
    };

    var _professions = {
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
    }; // _professions

    var _addDescriptionsToGameBoard = function () {
      var gameBoard = document.querySelector('.game-board');
      var randomIndex = new randomArrayIndex(elements.descriptions);
      while (randomIndex.addedIndexes.length < 5) {
        var index = randomIndex.get();
        gameBoard.appendChild(elements.descriptions[index]);
      }
    }

    return {
      
      professions: _professions.get(),

      init: function () {
        elements = _createElements(this.professions);        
        _draggableGrid.create(elements.descriptions);
        _addDescriptionsToGameBoard();
      }

    };

  })(); // MatchMaker

  MatchMaker.init();

})(window, document);


