window.onload = function(){
	var music = document.getElementById('music');
	var audio = document.getElementsByTagName('audio')[0];
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');



	//当音乐播放完挺值得时候,自动停止光盘旋转效果
	audio.addEventListener("ended", function(event){
		music.setAttribute("class", "");
	}, false);

	//点击音乐图标,控制音乐播放效果
	// music.onclick = function(){
	// 	if(audio.paused){
	// 		audio.play();
	// 		this.setAttribute("class", "play");
	// 		// this.style.animationPlayState = "running";
	// 	}else{
	// 		audio.pause();
	// 		//此方法点击完后暂停,但是music_disc动画会回归原位
	// 		this.setAttribute("class", "");
	// 		//此方法兼容性不行
	// 		// this.style.animationPlayState = "paused";
	// 	}
	// }

	music.addEventListener("touchstart", function(enevt){
		if(audio.paused){
			audio.play();
			this.setAttribute("class", "play");
			// this.style.animationPlayState = "running";
		}else{
			audio.pause();
			//此方法点击完后暂停,但是music_disc动画会回归原位
			this.setAttribute("class", "");
			//此方法兼容性不行
			// this.style.animationPlayState = "paused";
		}
	}, false);

	//页面的翻页效果
	page1.addEventListener("touchstart", function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		// page3.style.display = "block";
		// page3.style.top = "100%";
	// 	setTimeout(function(){
	// 		page2.setAttribute("class", "page fadeOut");
	// 		page3.setAttribute("class", "page fadeIn");
	// 	},2000);
	}, false);
	
	page2.addEventListener("touchstart", function(event){
		page1.style.display = "none";
		page2.style.display = "none";
		page3.style.display = "block";
	},false);
}