let pet = {
    name: "Dave",
    type: "cat",
    age: 1,
    hunger: 50,
    thirst: 50,
    happiness: 50,
    energy: 50,
    love: 0,
    level: 1,
    maxHunger: 100,
    maxThirst: 100,
    maxHappiness: 100,
    maxEnergy: 100,
    maxLove: 100,
    creationdate: new Date().toISOString(),
    image: "cat.png"
};

function backgroundScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.backgroundPosition = `center ${-scrollTop * 0.5}px`;
}

window.addEventListener('scroll', backgroundScroll);


function preview(petNumber) {
if (petNumber === 1) {
    document.getElementById("pet1").src = "../assets/pet/bear/happy.png";
    document.getElementById("pet2").src = "../assets/pet/bunny/neutral.png";
    document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
    document.getElementById("pet4").src = "../assets/pet/fox/neutral.png";
    document.getElementById("pet5").src = "../assets/pet/penguin/neutral.png";
    document.getElementById("pet6").src = "../assets/pet/pig/neutral.png";
    document.getElementById("pet7").src = "../assets/pet/squid/neutral.png";
    document.getElementById("pet8").src = "../assets/pet/wolf/neutral.png";
    }else if (petNumber === 2) {
        document.getElementById("pet1").src = "../assets/pet/bear/neutral.png";
        document.getElementById("pet2").src = "../assets/pet/bunny/happy.png";
        document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
        document.getElementById("pet4").src = "../assets/pet/fox/neutral.png";
        document.getElementById("pet5").src = "../assets/pet/penguin/neutral.png";
        document.getElementById("pet6").src = "../assets/pet/pig/neutral.png";
        document.getElementById("pet7").src = "../assets/pet/squid/neutral.png";
        document.getElementById("pet8").src = "../assets/pet/wolf/neutral.png";
    }else if (petNumber === 3) {
        document.getElementById("pet1").src = "../assets/pet/bear/neutral.png";
        document.getElementById("pet2").src = "../assets/pet/bunny/neutral.png";
        document.getElementById("pet3").src = "../assets/pet/cat/happy.png";
        document.getElementById("pet4").src = "../assets/pet/fox/neutral.png";
        document.getElementById("pet5").src = "../assets/pet/penguin/neutral.png";
        document.getElementById("pet6").src = "../assets/pet/pig/neutral.png";
        document.getElementById("pet7").src = "../assets/pet/squid/neutral.png";
        document.getElementById("pet8").src = "../assets/pet/wolf/neutral.png";
    }else if (petNumber === 4) {
        document.getElementById("pet1").src = "../assets/pet/bear/neutral.png";
        document.getElementById("pet2").src = "../assets/pet/bunny/neutral.png";
        document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
        document.getElementById("pet4").src = "../assets/pet/fox/happy.png";
        document.getElementById("pet5").src = "../assets/pet/penguin/neutral.png";
        document.getElementById("pet6").src = "../assets/pet/pig/neutral.png";
        document.getElementById("pet7").src = "../assets/pet/squid/neutral.png";
        document.getElementById("pet8").src = "../assets/pet/wolf/neutral.png";
    }else if (petNumber === 5) {
        document.getElementById("pet1").src = "../assets/pet/bear/neutral.png";
        document.getElementById("pet2").src = "../assets/pet/bunny/neutral.png";
        document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
        document.getElementById("pet4").src = "../assets/pet/fox/neutral.png";
        document.getElementById("pet5").src = "../assets/pet/penguin/happy.png";
        document.getElementById("pet6").src = "../assets/pet/pig/neutral.png";
        document.getElementById("pet7").src = "../assets/pet/squid/neutral.png";
        document.getElementById("pet8").src = "../assets/pet/wolf/neutral.png";
    }else if (petNumber === 6) {
        document.getElementById("pet1").src = "../assets/pet/bear/neutral.png";
        document.getElementById("pet2").src = "../assets/pet/bunny/neutral.png";
        document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
        document.getElementById("pet4").src = "../assets/pet/fox/neutral.png";
        document.getElementById("pet5").src = "../assets/pet/penguin/neutral.png";
        document.getElementById("pet6").src = "../assets/pet/pig/happy.png";
        document.getElementById("pet7").src = "../assets/pet/squid/neutral.png";
        document.getElementById("pet8").src = "../assets/pet/wolf/neutral.png";
    }else if (petNumber === 7) {
        document.getElementById("pet1").src = "../assets/pet/bear/neutral.png";
        document.getElementById("pet2").src = "../assets/pet/bunny/neutral.png";
        document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
        document.getElementById("pet4").src = "../assets/pet/fox/neutral.png";
        document.getElementById("pet5").src = "../assets/pet/penguin/neutral.png";
        document.getElementById("pet6").src = "../assets/pet/pig/neutral.png";
        document.getElementById("pet7").src = "../assets/pet/squid/happy.png";
        document.getElementById("pet8").src = "../assets/pet/wolf/neutral.png";
    }else if (petNumber === 8) {
        document.getElementById("pet1").src = "../assets/pet/bear/neutral.png";
        document.getElementById("pet2").src = "../assets/pet/bunny/neutral.png";
        document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
        document.getElementById("pet4").src = "../assets/pet/fox/neutral.png";
        document.getElementById("pet5").src = "../assets/pet/penguin/neutral.png";
        document.getElementById("pet6").src = "../assets/pet/pig/neutral.png";
        document.getElementById("pet7").src = "../assets/pet/squid/neutral.png";
        document.getElementById("pet8").src = "../assets/pet/wolf/happy.png";
    }
}
function choose(petNumber) {
    if (petNumber === 1) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Johnny";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "bear";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }
    else if (petNumber === 2) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Bucks";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "bunny";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }
    else if (petNumber === 3) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Garfield";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "cat";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }
    else if (petNumber === 4) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Nick";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "fox";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }else if (petNumber === 5) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Pingu";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "penguin";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }else if (petNumber === 6) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Porky";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "pig";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }else if (petNumber === 7) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Thaddäus";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "squid";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }else if (petNumber === 8) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Wolfgang";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "wolf";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }
}

function cry(petNumber) {
    if (petNumber === 1) {
        document.getElementById("pet1").src = "../assets/pet/bear/cry.png";
    } else if (petNumber === 2) {
        document.getElementById("pet2").src = "../assets/pet/bunny/cry.png";
    } else if (petNumber === 3) {
        document.getElementById("pet3").src = "../assets/pet/cat/cry.png";
    } else if (petNumber === 4) {
        document.getElementById("pet4").src = "../assets/pet/fox/cry.png";
    } else if (petNumber === 5) {
        document.getElementById("pet5").src = "../assets/pet/penguin/cry.png";
    } else if (petNumber === 6) {
        document.getElementById("pet6").src = "../assets/pet/pig/cry.png";
    } else if (petNumber === 7) {
        document.getElementById("pet7").src = "../assets/pet/squid/cry.png";
    } else if (petNumber === 8) {
        document.getElementById("pet8").src = "../assets/pet/wolf/cry.png";
    }
    setTimeout(() => {
            if (petNumber === 1) {
                document.getElementById("pet1").src = "../assets/pet/bear/neutral.png";
            } else if (petNumber === 2) {
                document.getElementById("pet2").src = "../assets/pet/bunny/neutral.png";
            } else if (petNumber === 3) {
                document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
            } else if (petNumber === 4) {
                document.getElementById("pet4").src = "../assets/pet/fox/neutral.png";
            } else if (petNumber === 5) {
                document.getElementById("pet5").src = "../assets/pet/penguin/neutral.png";
            } else if (petNumber === 6) {
                document.getElementById("pet6").src = "../assets/pet/pig/neutral.png";
            } else if (petNumber === 7) {
                document.getElementById("pet7").src = "../assets/pet/squid/neutral.png";
            } else if (petNumber === 8) {
                document.getElementById("pet8").src = "../assets/pet/wolf/neutral.png";
            }
        }, 1500); // Reset to neutral after 2 seconds
}