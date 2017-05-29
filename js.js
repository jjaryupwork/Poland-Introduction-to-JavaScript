var selecting = document.getElementsByTagName('select');
var element = document.getElementById('content');

function dropdownStyles(e){
	e.stopPropagation();
	/*var style = this.id;
	var value = this.value;*/
	/*element.style[style] = value;*/
	element.style[this.id] = this.value;
}
 	for ( var i = 0; i < selecting.length; i++){
 		selecting[i].addEventListener('change', dropdownStyles, false );

 		
 }

