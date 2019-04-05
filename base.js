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
	var visitedMenu=document.querySelector('nav a[href*="' + nowPath + '"]');

	if(visitedMenu){
		visitedMenu.closest('li').classList.add('active');
	}else{
		document.querySelector('nav ul li').classList.add('active');
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

setInterval(function(){
	if(slideIndex==2){
		slideIndex=0;
	}else{
		slideIndex++;
	}
	sliderMove();
}, 3000);