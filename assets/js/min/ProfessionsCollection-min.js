var ProfessionsCollection=function(s){this.professions=s,this.elements=this.createElements()};ProfessionsCollection.prototype.createElements=function(){for(var s=[],e=0;e<this.professions.length;e++){var o=new Profession(this.professions[e].profession);s.push(o.element)}return s};