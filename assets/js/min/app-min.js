!function(e,t,n){"use strict";var s=new Clock(t.querySelector("#time span")),i=function(){var e=0,n=0,i=180,o=230,r={type:"x,y",edgeResistance:.65,bounds:".game-board",throwProps:!0,snap:{x:function(e){return Math.round(e/i)*i},y:function(e){return Math.round(e/o)*o}}},a={professions:[],addedIndexes:[],get:function(){for(var e=new randomArrayIndex(gameData);this.professions.length<5;){var t=e.get();this.professions.push(gameData[t])}return this.professions},reset:function(){this.professions=[],this.addedIndexes=[]}},c=function(e){for(var t=new randomArrayIndex(e);t.addedIndexes.length<5;){var n=t.get();e[n].element.style.left=180*(t.addedIndexes.length-1)+"px",d(e[n].element)}},l=t.querySelector(".game-board"),d=function(e){l.appendChild(e)};return{professions:null,bindEvents:function(){t.querySelector("button").addEventListener("click",this.startGame.bind(this))},unbindEvents:function(){t.querySelector("button").removeEventListener("click",this.startGame.bind(this))},init:function(){this.professions=a.get(),this.professionsCollection=new ProfessionsCollection(this.professions);for(var e=0;e<this.professionsCollection.elements.length;e++)d(this.professionsCollection.elements[e]);this.descriptionsCollection=new DescriptionsCollection(this.professions),c(this.descriptionsCollection.descriptions)},makeDraggable:function(e){var t=this;r.onDrag=function(e){[].forEach.call(t.professionsCollection.elements,function(e){this.hitTest(e,50)?e.classList.add("hover"):e.classList.remove("hover")}.bind(this))},r.onDragEnd=function(e){[].forEach.call(t.professionsCollection.elements,function(e){this.hitTest(e,50)&&t.cardHasBeenPlaced(e,this)}.bind(this))},Draggable.create(e,r)},cardHasBeenPlaced:function(e,t){this.checkAnswer(e,t.target),t.disable(),setTimeout(function(){t.target.classList.add("disabled"),t.target.querySelector("h3").innerHTML=e.getAttribute("data-pair"),e.style.display="none"},500)},startGame:function(){s.start(),this.turnCard()},stopGame:function(){s.stop(),console.log("Rätta svar: "+e)},turnCard:function(){var e=this.descriptionsCollection.turnCard();this.makeDraggable(e.element)},checkAnswer:function(t,s){n++,t.getAttribute("data-pair")===s.getAttribute("data-pair")?(e++,s.classList.add("correct")):s.classList.add("wrong"),5===n?this.stopGame():this.turnCard()},resetGame:function(){for(var e=l.childNodes.length-1;e>=0;e--)l.childNodes[e].remove();s.reset(),this.unbindEvents(),a.reset(),this.professionsCollection=null,this.descriptionsCollection=null,this.init()}}}();e.MatchMaker=i}(window,document);