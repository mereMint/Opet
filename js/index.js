let settings = {
  Main : false,
  Select : false,
  Hub : false,
}

window.onload = function () {
  if (!localStorage.getItem("settings")) {
    localStorage.setItem("settings", JSON.stringify(settings));
  }else {
    settings = JSON.parse(localStorage.getItem("settings"));
  }
}


let muisc = new Audio('assets/sounds/main.ogg')
let click = new Audio('assets/sounds/click.ogg')
muisc.loop = true;
muisc.volume = 0.25;



function noise() {
  if (settings.Main) {
    settings.Main = false;
    console.log("Settings saved")
    localStorage.setItem("settings", JSON.stringify(settings));
  } else {
    settings.Main = true;
    console.log("Settings saved")
    localStorage.setItem("settings", JSON.stringify(settings));
  }
}

setInterval(function () {
  if (settings.Main) {
    muisc.play();
    document.getElementById("audio").src = `assets/actions/play.png`;
  } else {
    muisc.pause();
    document.getElementById("audio").src = `assets/actions/mute.png`;
  }
},100)

function clickSound() {
  if(settings.Main){
    click.play();
  }
}





function backgroundScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.backgroundPosition = `center ${-scrollTop * 0.5}px`;
  document.getElementById("a1").style.rotate = `${-scrollTop * 0.1}deg`;
  document.getElementById("a2").style.rotate = `${-scrollTop * 0.1}deg`;
  document.getElementById("a3").style.rotate = `${scrollTop * 0.1}deg`;
  document.getElementById("a4").style.rotate = `${scrollTop * 0.1}deg`;
  document.getElementById("a5").style.rotate = `${-scrollTop * 0.2}deg`;
  document.getElementById("a6").style.rotate = `${-scrollTop * 0.2}deg`;
  document.getElementById("a7").style.rotate = `${scrollTop * 0.2}deg`;
  document.getElementById("a8").style.rotate = `${scrollTop * 0.2}deg`;
  document.getElementById("a9").style.rotate = `${-scrollTop * 0.3}deg`;
  document.getElementById("a10").style.rotate = `${scrollTop * 0.3}deg`;


}

window.addEventListener('scroll', backgroundScroll);


function newGame() {
  clickSound();
  // Add logic to initialize a new game here
  localStorage.removeItem('pet');
  document.getElementById("box").classList.add("flyout");
  document.getElementById("body").classList.add("scrolly");

  // audio save
    console.log("Settings saved")
    localStorage.setItem("settings", JSON.stringify(settings));
  
  setTimeout(() => {
    window.location.href = "html/select.html";
  }, 1500);
}

function loadGame() {
  clickSound();
  document.getElementById("box").classList.add("flyout");
  document.getElementById("body").classList.add("scrolly");

  // audio save
    
  
  setTimeout(() => {
    if (!localStorage.getItem("pet")) {
      window.location.href = "html/select.html";
    }else {
       window.location.href = "html/hub.html";
    }
   
  }, 1500);
  // Add logic to load a saved game here
}