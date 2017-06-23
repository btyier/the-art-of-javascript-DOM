/*解决需要些多个window.onload的问题*/
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload!= 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
/*自己编写insertAfter函数*/
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function preparePlaceholder(){
	if(!document.createElement){
		return false;
	}
	if(!document.createTextNode){
		return false;
	}
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementById('imagegallery')){
		return false;
	}
	var placeholder = document.createElement('img');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','images/placeholder.gif');
	placeholder.setAttribute('alt','my image gallery');
	var description = document.createElement('p');
	description.setAttribute('id','description');
	var desctext = document.createTextNode('Choose an image');
	description.appendChild(desctext);
	document.getElementsByTagName('body')[0].appendChild(placeholder);
	document.getElementsByTagName('body')[0].appendChild(description);
	var gallery = document.getElementById('imagegallery');
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
function prepareGallery(){
	if(!document.getElementsByTagName){
		return false;
	}
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementById('imagegallery')){
		return false;
	}
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for(var i = 0;i < links.length;i++){
		links[i].onclick = function(){
			return !showPic(this);
		}
	}
}
function showPic(whichpic){
	if(!document.getElementById('placeholder')){
		return false;
	}
	var sourse = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',sourse);
	if(document.getElementById('description')){
		var text = whichpic.getAttribute('title');
		var description = document.getElementById('description');
		// description.childNodes[0].nodeValue = text;
		description.firstChild.nodeValue = text;
	}
	return true;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);


















