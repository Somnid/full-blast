var Blaster = (function(){

  function blast(){
    var elements = getElements();
    elements.forEach(element => element.parent.removeChild(element));
  }
  
  function getElements(){
    allElements = document.querySelector("*");
    elements = allElements.filter((element, index, array) => ["BODY", "HTML"].find(element.tag));
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    return elements.filter((element) => element.offsetWidth >= maxWidth && element.offsetHeight >= maxHeight);
  }

	return {
	  blast : blast
	};

})();