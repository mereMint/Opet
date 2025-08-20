function backgroundScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.backgroundPosition = `center ${-scrollTop * 0.5}px`;
}

window.addEventListener('scroll', backgroundScroll);


function newGame() {
  console.log("New game started");
  // Add logic to initialize a new game here
   localStorage.removeItem('pet');
   document.getElementById("box").classList.add("flyout");
  document.getElementById("body").classList.add("scrolly");
  
  setTimeout(() => {
    window.location.href = "../html/select.html";
  }, 1500);
}

function loadGame() {
  document.getElementById("box").classList.add("flyout");
  document.getElementById("body").classList.add("scrolly");
  
  setTimeout(() => {
    if (!localStorage.getItem("pet")) {
      window.location.href = "../html/select.html";
    }else {
       window.location.href = "../html/hub.html";
    }
   
  }, 1500);
  console.log("Game loaded");
  // Add logic to load a saved game here
}