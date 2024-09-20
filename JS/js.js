

// carousel 
var carouselImg = document.getElementById("carouselImg");
var index = 0;
// var duration = 3000;

const imgList = [
    "https://freewalkingtoursbordeaux.com/wp-content/uploads/2023/07/bordeaux-natural-history-museum.jpg",

    "https://museum.thuhuynh.no/assets/images-1/dinasaur-night.jpg",

    "https://museum.thuhuynh.no/assets/images-1/exhibition-night.jpg"

]


function displayNext(){
    if(-1 < index && index < imgList.length - 1){
        
        index += 1;
    }else{
        index = 0;
    }
    
carouselImg.src = imgList[index];
// setTimeout("displayNext()", duration);
}

// windows.onload = displayNext();

function displayPre(){
    if(0 < index && index < imgList.length ){
        index -= 1;
    }else{
        index = imgList.length - 1;
    }
    
carouselImg.src = imgList[index];
}


