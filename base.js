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