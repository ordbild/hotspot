var randomArrayIndex=function(e){this.array=e,this.addedIndexes=[]};randomArrayIndex.prototype.get=function(){for(var e=this.randomNumberBetween(0,this.array.length-1),r=!1,d=this.addedIndexes.length-1;d>=0;d--)if(this.addedIndexes[d]===e){r=!0;break}return r?this.get():(this.addedIndexes.push(e),e)},randomArrayIndex.prototype.randomNumberBetween=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};