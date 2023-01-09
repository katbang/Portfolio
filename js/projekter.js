window.addEventListener("scroll", beginDrop);
window.addEventListener("scroll", beginSving);
window.addEventListener("load", emnesiteVises);
window.addEventListener("load", procesVises);
window.addEventListener("load", spilVises);
window.addEventListener("load", layoutdiagramVises);
window.addEventListener("load", redesignVises);
window.addEventListener("load", dokumentationVises);

function beginSving() {
  document.querySelector("#skib").classList.add("sving");
  window.removeEventListener("scroll", beginSving);
  document
    .querySelector("#skib")
    .addEventListener("animationend", restartSving);
}
function restartSving() {
  document.querySelector("#skib").classList = "";
  this.offsetHeight;
  window.addEventListener("scroll", beginSving);
}
function beginDrop() {
  document.querySelector("#sæder").classList.add("upanddown");
  window.removeEventListener("scroll", beginDrop);
  document
    .querySelector("#sæder")
    .addEventListener("animationend", restartDrop);
}
function restartDrop() {
  document.querySelector("#sæder").classList = "";
  this.offsetHeight;
  window.addEventListener("scroll", beginDrop);
}

function hideAll() {
  document.querySelector("#emnesite1").classList.add("skjul");
  document.querySelector("#emnesite2").classList.add("skjul");
  document.querySelector("#emnesite3").classList.add("skjul");
  document.querySelector("#emnesite4").classList.add("skjul");
  document.querySelector("#emnesite5").classList.add("skjul");
}
function hideAll2() {
  document.querySelector("#løsning1").classList.add("skjul");
  document.querySelector("#løsning2").classList.add("skjul");
  document.querySelector("#løsning3").classList.add("skjul");
}
function hideAll3() {
  document.querySelector("#dokumentation2").classList.add("skjul");
  document.querySelector("#dokumentation3").classList.add("skjul");
  document.querySelector("#dokumentation4").classList.add("skjul");
}
function hideAll4() {
  document.querySelector("#temadokumentation2").classList.add("skjul");
  document.querySelector("#temadokumentation3").classList.add("skjul");
  document.querySelector("#temadokumentation4").classList.add("skjul");
  document.querySelector("#temadokumentation5").classList.add("skjul");
}
function hideAll5() {
  document.querySelector("#portfoliodok2").classList.add("skjul");
  document.querySelector("#portfoliodok3").classList.add("skjul");
}

function emnesiteVises() {
  console.log("emnesiteVises");
  hideAll();
  document.querySelector("#pil").addEventListener("mousedown", visMoodboard);
  document
    .querySelector("#pil")
    .removeEventListener("mousedown", emnesiteVises);
}
function visMoodboard() {
  document.querySelector("#emnesite1").classList.remove("skjul");
  document.querySelector("#pil").addEventListener("mousedown", visStyletile);
  document.querySelector("#pil").removeEventListener("mousedown", visMoodboard);
}
function visStyletile() {
  document.querySelector("#emnesite2").classList.remove("skjul");
  document.querySelector("#pil").addEventListener("mousedown", visWireframe1);
  document.querySelector("#pil").removeEventListener("mousedown", visStyletile);
}
function visWireframe1() {
  document.querySelector("#emnesite3").classList.remove("skjul");
  document.querySelector("#pil").addEventListener("mousedown", visWireframe2);
  document
    .querySelector("#pil")
    .removeEventListener("mousedown", visWireframe1);
}
function visWireframe2() {
  document.querySelector("#emnesite4").classList.remove("skjul");
  document.querySelector("#pil").addEventListener("mousedown", visWireframe3);
  document
    .querySelector("#pil")
    .removeEventListener("mousedown", visWireframe2);
}
function visWireframe3() {
  document.querySelector("#emnesite5").classList.remove("skjul");
  document.querySelector("#pil").addEventListener("mousedown", emnesiteVises);
  document
    .querySelector("#pil")
    .removeEventListener("mousedown", visWireframe3);
}

function procesVises() {
  hideAll2();
  document.querySelector("#pil2").addEventListener("mousedown", visResearch);
  document.querySelector("#pil2").removeEventListener("mousedown", procesVises);
}
function visResearch() {
  document.querySelector("#løsning1").classList.remove("skjul");
  document.querySelector("#pil2").addEventListener("mousedown", visSkitse);
  document.querySelector("#pil2").removeEventListener("mousedown", visResearch);
}
function visSkitse() {
  document.querySelector("#løsning2").classList.remove("skjul");
  document.querySelector("#pil2").addEventListener("mousedown", visMoodboard2);
  document.querySelector("#pil2").removeEventListener("mousedown", visSkitse);
}
function visMoodboard2() {
  document.querySelector("#løsning3").classList.remove("skjul");
  document.querySelector("#pil2").addEventListener("mousedown", procesVises);
  document
    .querySelector("#pil2")
    .removeEventListener("mousedown", visMoodboard2);
}

function spilVises() {
  hideAll3();
  document.querySelector("#pil3").addEventListener("mousedown", visPrototype);
  document.querySelector("#pil3").removeEventListener("mousedown", spilVises);
}
function visPrototype() {
  document.querySelector("#dokumentation2").classList.remove("skjul");
  document.querySelector("#pil3").addEventListener("mousedown", visSkitser);
  document
    .querySelector("#pil3")
    .removeEventListener("mousedown", visPrototype);
}
function visSkitser() {
  document.querySelector("#dokumentation3").classList.remove("skjul");
  document.querySelector("#pil3").addEventListener("mousedown", visScreendumps);
  document.querySelector("#pil3").removeEventListener("mousedown", visSkitser);
}
function visScreendumps() {
  document.querySelector("#dokumentation4").classList.remove("skjul");
  document.querySelector("#pil3").addEventListener("mousedown", spilVises);
  document
    .querySelector("#pil3")
    .removeEventListener("mousedown", visScreendumps);
}

function layoutdiagramVises() {
  document.querySelector("#layoutdiagram2").classList.add("skjul");
  document
    .querySelector("#pil4")
    .addEventListener("mousedown", visLayoutdiagram);
  document
    .querySelector("#pil4")
    .removeEventListener("mousedown", layoutdiagramVises);
}
function visLayoutdiagram() {
  document.querySelector("#layoutdiagram2").classList.remove("skjul");
  document
    .querySelector("#pil4")
    .addEventListener("mousedown", layoutdiagramVises);
  document
    .querySelector("#pil4")
    .removeEventListener("mousedown", visLayoutdiagram);
}

function redesignVises() {
  hideAll4();
  document.querySelector("#pil5").addEventListener("mousedown", visFilmning);
  document
    .querySelector("#pil5")
    .removeEventListener("mousedown", redesignVises);
}
function visFilmning() {
  document.querySelector("#temadokumentation2").classList.remove("skjul");
  document.querySelector("#pil5").addEventListener("mousedown", visMoodboard3);
  document.querySelector("#pil5").removeEventListener("mousedown", visFilmning);
}
function visMoodboard3() {
  document.querySelector("#temadokumentation3").classList.remove("skjul");
  document.querySelector("#pil5").addEventListener("mousedown", visStyletile2);
  document
    .querySelector("#pil5")
    .removeEventListener("mousedown", visMoodboard3);
}
function visStyletile2() {
  document.querySelector("#temadokumentation4").classList.remove("skjul");
  document.querySelector("#pil5").addEventListener("mousedown", visTests);
  document
    .querySelector("#pil5")
    .removeEventListener("mousedown", visStyletile2);
}
function visTests() {
  document.querySelector("#temadokumentation5").classList.remove("skjul");
  document.querySelector("#pil5").addEventListener("mousedown", redesignVises);
  document.querySelector("#pil5").removeEventListener("mousedown", visTests);
}

function dokumentationVises() {
  hideAll5();
  document.querySelector("#portfoliodok1").classList.remove("skjul");
  document.querySelector("#pil6").addEventListener("mousedown", visMoodboard4);
  document
    .querySelector("#pil6")
    .removeEventListener("mousedown", dokumentationVises);
}
function visMoodboard4() {
  document.querySelector("#portfoliodok2").classList.remove("skjul");
  document
    .querySelector("#pil6")
    .addEventListener("mousedown", visLayoutdiagram2);
  document
    .querySelector("#pil6")
    .removeEventListener("mousedown", visMoodboard4);
  document.querySelector("#portfoliodok1").classList.add("skjul");
}
function visLayoutdiagram2() {
  document.querySelector("#portfoliodok3").classList.remove("skjul");

  document
    .querySelector("#pil6")
    .addEventListener("mousedown", dokumentationVises);
  document
    .querySelector("#pil6")
    .removeEventListener("mousedown", visLayoutdiagram2);
  document.querySelector("#portfoliodok2").classList.add("skjul");
}
document.querySelector("#ballon1").addEventListener("mousedown", springBallon);
document.querySelector("#ballon2").addEventListener("mousedown", springBallon);
document.querySelector("#ballon3").addEventListener("mousedown", springBallon);

function springBallon() {
  this.classList.add("forsvind");
}
function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}
document
  .querySelector("#popcorn_container")
  .addEventListener("mousedown", springPopcorn);

function springPopcorn() {
  let rndNum = generateRandomNumber();
  document.querySelector("#popcorn").classList.add("move" + rndNum);
  document
    .querySelector("#popcorn")
    .addEventListener("animationend", restartSpring);
}
function restartSpring() {
  document.querySelector("#popcorn").classList = "";
  this.offsetHeight;
  this.addEventListener("mousedown", springPopcorn);
}
