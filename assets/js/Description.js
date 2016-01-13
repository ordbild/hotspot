var Description = function (matchWith, description) {
  this.matchWith = matchWith;
  this.description = description;
  this.element = this.createElement();
};

Description.prototype.createElement = function() {
  var element = document.createElement('div');
  element.innerHTML = [
    '<div class="card">'+
      '<div class="front"></div>'+
      '<div class="back">'+
        '<p>' + this.description + '</p>'+
      '</div>'+
    '</div>'
  ].join('');
  element.setAttribute('data-pair', this.matchWith);
  element.classList.add('description');
  return element;
};
