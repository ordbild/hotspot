(function (window, document, undefined) {
  'use strict';

  var clock = new Clock(document.querySelector('#time span'));
  
  var MatchMaker = (function () {

    /**
     * Gamedata
     */
    var correctAnswers = 0;
    var numberOfAnswers = 0;
    var gameInProgress = false;

    /**
     * Draggable grid settings
     */
    var gridWidth = 180;
    var gridHeight = 230;
    var draggableSettings = {
      type: 'x,y',
      edgeResistance: 1,
      bounds: '.game-board',
      throwProps:true,
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

    var scoreComments = document.querySelector('.score-comments');
    var showScoreComment = function (correctAnswers) {
      scoreComments.classList.add('visible');
      document.querySelector('.comment[data-score="'+correctAnswers+'"]').classList.add('visible');
    };
    var hideScoreComment = function () {
      scoreComments.classList.remove('visible');
      scoreComments.querySelector('.visible').classList.remove('visible');
    };

    var gameBoard = document.querySelector('.game-board');
    var addToGameBoard = function (element) {
      gameBoard.appendChild(element);
    };
    var btn = document.querySelector('#start-game');
    return {
      
      professions: null,

      bindEvents: function () {
        btn.addEventListener('click', function(){
            if (gameInProgress) {
                this.stopGame();
                this.resetGame();
            } else {
                this.startGame();
            }
        }.bind(this), true);
      },

      init: function () {
        this.professions = randomProfessions.get();
        this.professionsCollection = new ProfessionsCollection(this.professions);
        for (var i = 0; i < this.professionsCollection.elements.length; i++) {
          addToGameBoard(this.professionsCollection.elements[i]);
        };
        
        this.descriptionsCollection = new DescriptionsCollection(this.professions);
        _addDescriptionsToGameBoard(this.descriptionsCollection.descriptions);
      },

      makeDraggable: function (description) {
        var _this = this;
        var sensitivity = 100;
        
        draggableSettings.onDrag = function (e) {
          [].forEach.call(_this.professionsCollection.elements, function (profession) {
            if (this.hitTest(profession, sensitivity)) {
              profession.classList.add('hover');
            } else {
              profession.classList.remove('hover');
            }
          }.bind(this));
        };
        
        draggableSettings.onDragEnd = function (e) {
          var hoverCount = document.querySelectorAll('.hover').length;
          [].forEach.call(_this.professionsCollection.elements, function (profession) {
            if (this.hitTest(profession, sensitivity) && hoverCount === 1) {
              TweenLite.to(this.target, 0.5, {
                x: Math.round(this.target._gsTransform.x / gridWidth) * gridWidth,
                y: -230,
                delay: 0.1,
                ease: Power2.easeInOut,
                onComplete: function () {
                  _this.cardHasBeenPlaced(profession, this);
                }.bind(this)
              });
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
        btn.innerHTML = 'Börja om';
        gameInProgress = true;
      },

      stopGame: function () {
        setTimeout(function () {
          document.body.classList.add('game-finished');
        }, 500)
        clock.stop();
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
          showScoreComment(correctAnswers);
        } else {
          this.turnCard();
        }
      }, // checkAnswer

      resetGame: function () {
        btn.innerHTML = 'Starta';
        gameInProgress = false;
        numberOfAnswers = 0;

        hideScoreComment();
        for (var i = gameBoard.childNodes.length - 1; i >= 0; i--) {
          gameBoard.childNodes[i].remove();
        };

        setTimeout(function () {
          document.body.classList.remove('game-finished');
        }, 600);

        clock.stop();
        clock.reset();

        randomProfessions.reset();

        this.professionsCollection = null;
        this.descriptionsCollection = null;

        this.init();
      } // resetGame

    }; // return

  })(); // MatchMaker

  window.MatchMaker = MatchMaker;
  MatchMaker.bindEvents();
  MatchMaker.init();

})(window, document);


