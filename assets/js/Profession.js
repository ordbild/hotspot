var Profession = function (matchWith, profession) {
  this.matchWith = matchWith;
  this.profession = profession;
  this.element = this.render();
};

Profession.prototype.render = function() {
  var element = document.createElement('div');
  element.innerHTML = '<p>'+this.profession+'</p>';
  element.style.left = (this.matchWith * 180) + 'px';
  element.setAttribute('data-pair', this.matchWith);
  element.classList.add('profession');
  return element;
};