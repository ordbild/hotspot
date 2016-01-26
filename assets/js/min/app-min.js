!function(e,t,s){"use strict";var n=new Clock(t.querySelector("#time span")),i=function(){var e=0,s=0,i=180,o=230,r={type:"x,y",edgeResistance:1,bounds:".game-board",throwProps:!0},a={professions:[],addedIndexes:[],get:function(){for(var e=new randomArrayIndex(gameData);this.professions.length<5;){var t=e.get();this.professions.push(gameData[t])}return this.professions},reset:function(){this.professions=[],this.addedIndexes=[]}},d=function(e){for(var t=new randomArrayIndex(e);t.addedIndexes.length<5;){var s=t.get();e[s].element.style.left=180*(t.addedIndexes.length-1)+"px",l(e[s].element)}},c=t.querySelector(".game-board"),l=function(e){c.appendChild(e)},h=t.querySelector("#start-game"),u=t.querySelector("#reset-game");return{professions:null,bindEvents:function(){h.addEventListener("click",this.startGame.bind(this),!0),u.addEventListener("click",this.resetGame.bind(this),!0)},unbindEvents:function(){h.removeEventListener("click",this.startGame.bind(this),!0)},init:function(){this.professions=a.get(),this.professionsCollection=new ProfessionsCollection(this.professions);for(var e=0;e<this.professionsCollection.elements.length;e++)l(this.professionsCollection.elements[e]);this.descriptionsCollection=new DescriptionsCollection(this.professions),d(this.descriptionsCollection.descriptions)},makeDraggable:function(e){var s=this,n=100;r.onDrag=function(e){[].forEach.call(s.professionsCollection.elements,function(e){this.hitTest(e,n)?e.classList.add("hover"):e.classList.remove("hover")}.bind(this))},r.onDragEnd=function(e){var o=t.querySelectorAll(".hover").length;[].forEach.call(s.professionsCollection.elements,function(e){this.hitTest(e,n)&&1===o&&TweenLite.to(this.target,.5,{x:Math.round(this.target._gsTransform.x/i)*i,y:-230,delay:.1,ease:Power2.easeInOut,onComplete:function(){s.cardHasBeenPlaced(e,this)}.bind(this)})}.bind(this))},Draggable.create(e,r)},cardHasBeenPlaced:function(e,t){this.checkAnswer(e,t.target),t.disable(),setTimeout(function(){t.target.classList.add("disabled"),t.target.querySelector("h3").innerHTML=e.getAttribute("data-pair"),e.style.display="none"},500)},startGame:function(){n.start(),this.turnCard()},stopGame:function(){setTimeout(function(){t.body.classList.add("game-finished")},500),n.stop()},turnCard:function(){var e=this.descriptionsCollection.turnCard();this.makeDraggable(e.element)},checkAnswer:function(t,n){s++,t.getAttribute("data-pair")===n.getAttribute("data-pair")?(e++,n.classList.add("correct")):n.classList.add("wrong"),5===s?this.stopGame():this.turnCard()},resetGame:function(){for(var e=c.childNodes.length-1;e>=0;e--)c.childNodes[e].remove();t.body.classList.remove("game-finished"),n.stop(),n.reset(),this.unbindEvents(),a.reset(),this.professionsCollection=null,this.descriptionsCollection=null,this.init()}}}();e.MatchMaker=i,i.bindEvents(),i.init()}(window,document);