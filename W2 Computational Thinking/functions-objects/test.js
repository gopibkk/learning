function ball (){
var div = document.createElement('div');
div.id = 'ball';
div.style.zIndex = '5';
div.style.position = 'absolute';    
div.style.left = '0px';    
div.style.top = '200px';    
div.style.width = '100px';    
div.style.height = '100px';    
div.style.borderRadius = '50%';
div.style.background = 'black';    
document.getElementsByTagName('body')[0].appendChild(div);
return (div); 
}