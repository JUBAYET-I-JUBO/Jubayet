let slideController = document.getElementById('controller')
slideController.addEventListener('click', function(e){
	for( let i = 0; i < slideController.children.length; i++ ) {
		slideController.children[i].classList.remove('active-slide')
	}
	if (e.target.tagName == 'SPAN' ){
		e.target.classList.add('active-slide')
	}
})
