var DescriptionsCollection=function(e){this.professions=e,this.elements=this.render()};DescriptionsCollection.prototype.render=function(){for(var e=[],s=0;s<this.professions.length;s++){var n=new Description(s,this.professions[s]);e.push(n.element)}return e};