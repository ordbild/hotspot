var DescriptionsCollection = function (professions) {
  this.professions = professions;
  this.descriptions = this.makeCollection();

  this.randomArrayIndex = new randomArrayIndex(this.descriptions);
};

DescriptionsCollection.prototype.makeCollection = function() {
  var elements = [];
  for (var i = 0; i < this.professions.length; i++) {
    var description = new Description(i, this.professions[i]);
    elements.push(description);
  };
  return elements;
};

DescriptionsCollection.prototype.turnCard = function() {
  var description = this.descriptions[this.randomArrayIndex.get()];
  description.element.querySelector('.card').classList.add('flip');
  return description;
};