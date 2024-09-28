function change_src(str) {
	let img = document.getElementById("big-img");
	img.src = str;
	let link = document.getElementById("link-youtube");
	let count = img.setAttribute("count");

	// if(img == "img/song2.jpg") {
	// 	link.location.href = "https://www.youtube.com/watch?v=impSuIygMiQ";
	// }else if(img == "img/song3.jpg") {

	// }
	if(count == "1") {
		link.location.href = "https://www.youtube.com/watch?v=V5Z5LR0NrBo";
		img.setAttribute("count","2");
	}else if(count == "2") {
		link.location.href = "https://www.youtube.com/watch?v=impSuIygMiQ";
		img.setAttribute("count","3");
	}else if(count == "3") {
		link.location.href = "https://www.youtube.com/watch?v=QtXNvoPfO84";
		img.setAttribute("count","4");
	}else if(count == "4") {
		link.location.href = "https://www.youtube.com/watch?v=d2mMwZEZB3w";
		img.setAttribute("count","5");
	}else if(count == "5") {
		link.location.href = "https://www.youtube.com/watch?v=MshLY-zfldM";
		img.setAttribute("count","1");
	}
};

function change_img(str) {
	let img = document.getElementById("core-img");
	img.src = str;
	let name = document.getElementById("name");

	// if(index == "1") {
	// 	img.src = "img/lisa.jpg";
	// 	name.innerHTML = "LiSA";
	// 	img.setAttribute("count","2");
	// }else if(index == "2") {
	// 	img.src = "img/dish.png";
	// 	name.innerHTML = "DISH//";
	// 	img.setAttribute("count","3");
	// }else if(index == "3") {
	// 	img.src = "img/milet.jpg";
	// 	name.innerHTML = "milet";
	// 	img.setAttribute("count","4");
	// }else if(index == "4") {
	// 	img.src = "img/BlueEncount.jpg";
	// 	name.innerHTML = "Blue Encount";
	// 	img.setAttribute("count","5");
	// }else if(index == "5") {
	// 	img.src = "img/reona.jpg";
	// 	name.innerHTML = "Reona";
	// 	img.setAttribute("count","1");
	// }

	if(img.src == "img/lisa.jpg") {
		name.innerHTML = "LiSA";
	}else if(img.src == "img/dish.png") {
		name.innerHTML = "DISH//";
	}else if(img.src == "img/milet.jpg") {
		name.innerHTML = "milet";
	}else if (img.src == "img/BlueEncount.jpg") {
		name.innerHTML = "Blue Encount";
	}else if (img.src == "img/reona.jpg") {
		name.innerHTML = "Reona"; 
	};
};