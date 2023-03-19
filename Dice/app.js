// alert("Refresh");
var randomNumber1=Math.ceil(Math.random()*6);
var randomImage1=randomNumber1+".png";
var randomImageSource1="Image/"+randomImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);


var randomNumber2=Math.ceil(Math.random()*6);
var randomImage2=randomNumber2+".png";
var randomImageSource2="Image/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent="Match tied!😎";
}