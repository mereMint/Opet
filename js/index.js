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
  console.log("New game started");
  // Add logic to initialize a new game here
   localStorage.removeItem('pet');
   document.getElementById("box").classList.add("flyout");
  document.getElementById("body").classList.add("scrolly");
  
  setTimeout(() => {
    window.location.href = "html/select.html";
  }, 1500);
}

function loadGame() {
  document.getElementById("box").classList.add("flyout");
  document.getElementById("body").classList.add("scrolly");
  
  setTimeout(() => {
    if (!localStorage.getItem("pet")) {
      window.location.href = "html/select.html";
    }else {
       window.location.href = "html/hub.html";
    }
   
  }, 1500);
  console.log("Game loaded");
  // Add logic to load a saved game here
}