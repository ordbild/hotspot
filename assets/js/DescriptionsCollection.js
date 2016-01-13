var DescriptionsCollection = function (professions) {
  this.professions = professions;
  this.elements = this.render();
};

DescriptionsCollection.prototype.render = function() {
  var elements = [];
  for (var i = 0; i < this.professions.length; i++) {
    var description = new Description(i, this.professions[i]);
    elements.push(description.element);
  };
  return elements;
};