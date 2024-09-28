var img = ['img/BlueEncount.jpg', 'img/juju.jpg', 'img/jo1.jpg', 'img/reona.jpg', 'img/milet.jpg', 'img/yama.jpg', 'img/dish2.jpg', 'img/ikura.png', 'img/chico.jpg', 'img/super-beaver.png','img/lisa.jpg', 'img/kana-boon.jpg', 'img/tk.jpg'];
var nameImg = ['Blue Encount', 'JUJU', 'JO1', 'REONA', 'milet', 'yama' ,'DISH//', 'YOASOBI', 'Chico with Honeyworks', 'Super Beaver', 'LiSA', 'KANA-BOON', 'TK'];

function myFunction() {
    let name = document.getElementById("search-bar");
    let search = name.value.toLowerCase()
    var a = document.getElementsByClassName("singer")[0];
    a.innerHTML = ''
    for(var i =0; i < nameImg.length; i++) {
        if(nameImg[i].toLowerCase().includes(search)) {
            var div = document.createElement('div')
            div.className = 'singer-each';
            var aElement = document.createElement('a')
            var imgElement = document.createElement('img')
            imgElement.src = img[i]
            var h1Ele = document.createElement('h1')
            h1Ele.className = 'name'
            h1Ele.innerHTML = nameImg[i]
            var pEle = document.createElement('p')
            pEle.innerHTML = 'See details'
            aElement.appendChild(imgElement)
            aElement.appendChild(h1Ele)
            aElement.appendChild(pEle)
            div.appendChild(aElement)
            a.appendChild(div)
        }
    }
}