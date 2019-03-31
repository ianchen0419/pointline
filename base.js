function topAnimate(){
	if(window.scrollY>500){
		visual.classList.add('stop');
	}else{
		visual.classList.remove('stop');
	}
}

var slideData=[{
	title: 'ビューティーワールド',
	location: '東京ビックサイト'
}, {
	title: 'BioJapan',
	location: 'パシフィコ横浜'
}, {
	title: '東京オートサロン',
	location: '幕張メッセ'
}];

var slideIndex=0;
var dots=document.querySelectorAll('.dots-area i');

function sliderMove(){
	var activeDot=document.querySelector('.dots-area i.active');
	activeDot.classList.remove('active');

	var imgIndex=slideIndex+1;
	sliderTitle.classList.add('hide1');
	sliderLocation.classList.add('hide1');
	sliderImage.classList.add('hide1');

	sliderImage.src='inc/img/top/slide'+imgIndex+'.jpg';
	sliderTitle.textContent=slideData[slideIndex].title;
	sliderLocation.textContent=slideData[slideIndex].location+'にて開催';
	
	setTimeout(function(){
		sliderTitle.classList.add('hide2');
		sliderLocation.classList.add('hide2');
		sliderImage.classList.add('hide2');
	},300);

	setTimeout(function(){
		sliderTitle.className='';
		sliderLocation.className='';
		sliderImage.className='';
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