var ProfessionsCollection = function (professions) {
  this.professions = professions;
  this.elements = this.createElements();
};
ProfessionsCollection.prototype.createElements = function() {
  var elements = [];
  for (var i = 0; i < this.professions.length; i++) {
    var profession = new Profession(i, this.professions[i]);
    elements.push(profession.element);
  };
  return elements;
};