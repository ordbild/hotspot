var randomArrayIndex = function (array) {
  this.array = array;
  this.addedIndexes = [];
}
randomArrayIndex.prototype.get = function () {
  var randomIndex = this.randomNumberBetween(0, (this.array.length-1));
  
  var indexAlreadyUsed = false;
  for (var i = this.addedIndexes.length - 1; i >= 0; i--) {
    if (this.addedIndexes[i] === randomIndex) {
      indexAlreadyUsed = true;
      break;
    }
  }
  
  if (indexAlreadyUsed) {
    return this.get();
  } else {
    this.addedIndexes.push(randomIndex);
  }
  return randomIndex;
};
randomArrayIndex.prototype.randomNumberBetween = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};