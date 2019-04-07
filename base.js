var headerXhr=new XMLHttpRequest();
var nowPath=location.pathname.split('/').pop();

headerXhr.open('GET', 'header.html', true);
headerXhr.send();

headerXhr.onreadystatechange=function(){
	if(headerXhr.readyState==4 && headerXhr.status==200){
		header.innerHTML = headerXhr.responseText;
		menuHighlight();
	}
};


var footerXhr=new XMLHttpRequest();

footerXhr.open('GET', 'footer.html', true);
footerXhr.send();

footerXhr.onreadystatechange=function(){
	if(footerXhr.readyState==4 && footerXhr.status==200){
		footer.innerHTML = footerXhr.responseText;
	}
};


function menuHighlight(){
	var menuList=document.querySelectorAll('nav li');
	if(nowPath==='' || nowPath==='index.html'){
		menuList[0].classList.add('active');
	}else if(nowPath==='concept.html'){
		menuList[1].classList.add('active');
	}else if(nowPath==='exhibition.html'){
		menuList[2].classList.add('active');
	}else if(nowPath==='3d-image.html' || nowPath==='graphics.html' || nowPath==='web.html' || nowPath==='movie.html' || nowPath==='illustration.html'){
		menuList[3].classList.add('active');
	}else if(nowPath==='company.html'){
		menuList[4].classList.add('active');
	}else if(nowPath==='contact.html'){
		menuList[6].classList.add('active');
	}
}


var slideIndex=0;
var dots=document.querySelectorAll('.dots-area i');

function sliderMove(){
	var activeDot=document.querySelector('.dots-area i.active');
	activeDot.classList.remove('active');

	var imgIndex=slideIndex+1;
	sliderImage.classList.add('hide1');
	
	setTimeout(function(){
		sliderImage.classList.add('hide2');
	},300);

	setTimeout(function(){
		sliderImage.className='';
		sliderImage.src='inc/img/top/slide'+imgIndex+'.jpg';
		dots[slideIndex].classList.add('active');
	},500);
}

function goNext(){
	if(slideIndex==2){
		slideIndex=0;
	}else{
		slideIndex++;
	}
	sliderMove();
}

function goPrev(){
	if(slideIndex==0){
		slideIndex=2;
	}else{
		slideIndex--;
	}
	sliderMove();
}

function changeIndex(idx){
	slideIndex=idx;
	sliderMove();
}

if(window['sliderImage']){
	setInterval(function(){
		if(slideIndex==2){
			slideIndex=0;
		}else{
			slideIndex++;
		}
		sliderMove();
	}, 3000);
}

var galleryIndex=0;

function openGallery(idx){
	galleryIndex=idx;
	runGallery();
	setTimeout(function(){
		gallerySlider.classList.add('show');
	}, 200)

}

function galleryPrev(){
	if(galleryIndex==0){
		return;
	}else{
		galleryIndex--;
		runGallery();
	}
}

function galleryNext(){
	if(galleryIndex==8){
		return;
	}else{
		galleryIndex++;
		runGallery();
	}
}

window.addEventListener("keydown", function(e){
	if(e.keyCode==27){
		gallerySlider.classList.remove('show')
	}

	if(gallerySlider.classList.contains('show')){
		if(e.keyCode==37){
			galleryPrev();
		}else if(e.keyCode==39){
			galleryNext();
		}
	}
})


function runGallery(){
	gallerySliderWrapper.style.transform="translateX(-"+galleryIndex+"00vw)";
	counterIndex.textContent=galleryIndex+1;
	dl_btn.setAttribute('href', gallerySliderWrapper.children[galleryIndex].querySelector('img').src);
}

function makeFull(){
	if(document.webkitFullscreenElement || document.msRequestFullscreenElement || document.mozRequestFullScreenElement || document.fullscreenElement){
		if(document.exitFullscreen){
			document.exitFullscreen();
		}else if(document.msExitFullscreen){
			document.msExitFullscreen();
		}else if(document.mozExitFullScreen){
			document.mozExitFullScreen();
		}else if(document.webkitExitFullscreen){
			document.webkitExitFullscreen();
		}
	}else{
		if(gallerySlider.requestFullscreen){
			gallerySlider.requestFullscreen();
		}else if(gallerySlider.msRequestFullscreen){
			gallerySlider.msRequestFullscreen();
		}else if(gallerySlider.mozRequestFullScreen){
			gallerySlider.mozRequestFullScreen();
		}else if(gallerySlider.webkitRequestFullscreen){
			gallerySlider.webkitRequestFullscreen();
		}
	}
}