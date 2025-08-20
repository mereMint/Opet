function backgroundScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.backgroundPosition = `center ${-scrollTop * 0.5}px`;
}

window.addEventListener('scroll', backgroundScroll);


function newGame() {
  console.log("New game started");
  // Add logic to initialize a new game here
   localStorage.removeItem('pet');
   window.location.href = "html/select.html";
}

function loadGame() {
  window.location.href = "html/hub.html";
  console.log("Game loaded");
  // Add logic to load a saved game here
}