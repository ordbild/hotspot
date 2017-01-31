var Description = function (index, data) {
    this.index = index;

    this.profession = data.profession;
    this.description = data.description;
    this.image = null;

    this.element = this.render();
    this.bindEvents();
};

Description.prototype.render = function() {
    var element = document.createElement('div');
    element.innerHTML = [
        '<div class="card">'+
            '<div class="front"></div>'+
            '<div class="back">'+
                '<h3>&nbsp;</h3>'+
                '<ul><li>' + this.description.join('</li><li>') + '</li></ul>'+
            '</div>'+
            '<div class="icon-correct-wrong"></div>'+
        '</div>'
    ].join('');
    element.setAttribute('data-pair', this.profession);
    element.classList.add('description');
    return element;
};

Description.prototype.bindEvents = function() {
    this.element.addEventListener('click', this.onClick);
};

Description.prototype.onClick = function(event) {
    //this.querySelector('.card').classList.toggle('flip');
};
