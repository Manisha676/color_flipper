function changecolor(){

  let red =  Math.floor(Math.random()* 256) ;
  let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 
    let color = "rgb(" + red + "," + green + "," + blue + ")"; 
    let randomcode = "#" + color .toString(16);
 document.querySelector("body").style.backgroundColor = color;
 document.getElementById("colorname").innerText = randomcode;
 console.log(randomcode);

}

