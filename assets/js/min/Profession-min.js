var Profession=function(e,i){this.index=e,this.profession=i.profession,this.description=i.description,this.image=null,this.element=this.render()};Profession.prototype.render=function(){var e=document.createElement("div");return e.innerHTML="<h3>"+this.profession+"</h3>",e.style.left=180*this.index+"px",e.setAttribute("data-pair",this.profession),e.classList.add("profession"),e};