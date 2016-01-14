var Profession = function (index, data) {
  this.index = index;  
  this.profession = data.profession;
  this.description = data.description;
  this.image = null;

  this.element = this.render();
};

Profession.prototype.render = function() {
  var element = document.createElement('div');
  element.innerHTML = '<h3>'+this.profession+'</h3>';
  element.style.left = (this.index * 180) + 'px';
  element.setAttribute('data-pair', this.profession);
  element.classList.add('profession');
  return element;
};