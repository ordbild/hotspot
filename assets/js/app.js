(function (window, document, undefined) {
  'use strict';

  var clock = new Clock(document.querySelector('#time span'));
  
  var MatchMaker = (function () {

    /**
     * Gamedata
     */
    var correctAnswers = 0;
    var numberOfAnswers = 0;

    /**
     * Draggable grid settings
     */
    var gridWidth = 180;
    var gridHeight = 230;
    var draggableSettings = {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: '.game-board',
      throwProps:true,
      snap: {
        x: function(endValue) {
          return Math.round(endValue / gridWidth) * gridWidth;
        },
        y: function(endValue) {
          return Math.round(endValue / gridHeight) * gridHeight;
        }
      },
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
      },
      reset: function () {
        this.professions = [];
        this.addedIndexes = [];
      }
    }; // randomProfessions

    var _addDescriptionsToGameBoard = function (descriptions) {
      var randomIndex = new randomArrayIndex(descriptions);
      while (randomIndex.addedIndexes.length < 5) {
        var index = randomIndex.get();
        descriptions[index].element.style.left = ((randomIndex.addedIndexes.length - 1) * 180) + 'px';  
        addToGameBoard(descriptions[index].element);
      }
    };

    var gameBoard = document.querySelector('.game-board');
    var addToGameBoard = function (element) {
      gameBoard.appendChild(element);
    };

    return {
      
      professions: null,

      bindEvents: function () {
        document.querySelector('button').addEventListener('click', this.startGame.bind(this));
      },

      unbindEvents: function () {
        document.querySelector('button').removeEventListener('click', this.startGame.bind(this));
      }, 

      init: function () {
        this.professions = randomProfessions.get();
        this.professionsCollection = new ProfessionsCollection(this.professions);
        for (var i = 0; i < this.professionsCollection.elements.length; i++) {
          addToGameBoard(this.professionsCollection.elements[i]);
        };
        
        this.descriptionsCollection = new DescriptionsCollection(this.professions);
        _addDescriptionsToGameBoard(this.descriptionsCollection.descriptions);
        
        //this.bindEvents();
      },

      makeDraggable: function (description) {
        var _this = this;
        draggableSettings.onDrag = function (e) {
          [].forEach.call(_this.professionsCollection.elements, function (profession) {
            if (this.hitTest(profession, 50)) {
              profession.classList.add('hover');
            } else {
              profession.classList.remove('hover');
            }
          }.bind(this));
        };
        draggableSettings.onDragEnd = function (e) {
          [].forEach.call(_this.professionsCollection.elements, function (profession) {
            if (this.hitTest(profession, 50)) {
              _this.cardHasBeenPlaced(profession, this);
            }
          }.bind(this));
        };
        Draggable.create(description, draggableSettings);
      }, // makeDraggable

      cardHasBeenPlaced: function (profession, draggableInstance) {
        this.checkAnswer(profession, draggableInstance.target);
        draggableInstance.disable();
        setTimeout(function () {
          draggableInstance.target.classList.add('disabled');
          draggableInstance.target.querySelector('h3').innerHTML = profession.getAttribute('data-pair');
          profession.style.display = 'none';
        }, 500)
      },

      startGame: function () {
        clock.start();
        this.turnCard();
      },

      stopGame: function () {
        clock.stop();
        console.log('Rätta svar: ' + correctAnswers);

      },

      turnCard: function () {
        var description = this.descriptionsCollection.turnCard();
        this.makeDraggable(description.element);
      },

      checkAnswer: function (profession, description) {
        numberOfAnswers++;
        if (profession.getAttribute('data-pair') === description.getAttribute('data-pair')) {
          correctAnswers++;
          description.classList.add('correct');
        } else {
          description.classList.add('wrong');
        }
        if (numberOfAnswers === 5) {
          this.stopGame();
        } else {
          this.turnCard();
        }
      }, // checkAnswer

      resetGame: function () {
        for (var i = gameBoard.childNodes.length - 1; i >= 0; i--) {
          gameBoard.childNodes[i].remove();
        };

        clock.reset();

        this.unbindEvents();

        randomProfessions.reset();

        this.professionsCollection = null;
        this.descriptionsCollection = null;

        this.init();
      }

    }; // return

  })(); // MatchMaker

  window.MatchMaker = MatchMaker;
  //MatchMaker.init();

})(window, document);


