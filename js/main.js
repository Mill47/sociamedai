//   <!-- ============= [ARWWO] ============ -->
let arwwo = document.querySelector(".arwwo");
let whatsapp = document.querySelector(".whatsapp");
arwwo.classList.remove("active");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    arwwo.classList.add("active");
  } else {
    arwwo.classList.remove("active");
  }
});
arwwo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
whatsapp.classList.remove("active");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    whatsapp.classList.add("active");
  } else {
    whatsapp.classList.remove("active");
  }
});
//   <!-- ============= [HEADERLI] ============ -->
let headerli = document.querySelectorAll("header nav li");
let RascoGlitch = document.querySelectorAll(".Rasco-Glitch");
let sec = document.querySelectorAll(".sec");
headerli.forEach((element) => {
  element.addEventListener("click", function () {
    removeactiveli();
    element.classList.add("active");
  });
});
headerli[0].addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
headerli[1].addEventListener("click", function () {
  window.scrollTo({
    top: sec[0].offsetTop - 100,
    behavior: "smooth",
  });
});
headerli[2].addEventListener("click", function () {
  window.scrollTo({
    top: sec[1].offsetTop - 100,
    behavior: "smooth",
  });
});
headerli[3].addEventListener("click", function () {
  window.scrollTo({
    top: sec[2].offsetTop - 100,
    behavior: "smooth",
  });
});
headerli[4].addEventListener("click", function () {
  window.scrollTo({
    top: sec[3].offsetTop - 100,
    behavior: "smooth",
  });
});
for (let i = 0; i < RascoGlitch.length; i++) {
  RascoGlitch[i].addEventListener("click", function () {
    window.scrollTo({
      top: sec[4].offsetTop - 100,
      behavior: "smooth",
    });
  });
}
window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactiveli();
    headerli[0].classList.add("active");
  }
  if (window.scrollY >= sec[0].offsetTop - 200) {
    removeactiveli();
    headerli[1].classList.add("active");
  }
  if (window.scrollY >= sec[1].offsetTop - 200) {
    removeactiveli();
    headerli[2].classList.add("active");
  }
  if (window.scrollY >= sec[2].offsetTop - 200) {
    removeactiveli();
    headerli[3].classList.add("active");
  }
  if (window.scrollY >= sec[3].offsetTop - 200) {
    removeactiveli();
    headerli[4].classList.add("active");
  }
});
function removeactiveli() {
  headerli.forEach((element) => {
    element.classList.remove("active");
  });
}
//   <!-- ============= [YEAR DATE] ============ -->
let dateOfYear = new Date().getFullYear();
let yeardate = document.querySelectorAll(".year-date");
yeardate.forEach((element) => {
  element.innerHTML = dateOfYear;
});
//   <!-- ============= [LIPHONE] ============ -->
let liphone = document.querySelector(".li-phone");
let closeicophone = document.querySelector(".close-ico-phone");
let tooglei = document.querySelector(".toogle-i");
tooglei.addEventListener("click", function () {
  liphone.classList.add("active");
});
closeicophone.addEventListener("click", function () {
  liphone.classList.remove("active");
});
// -------------
let navphoneli = document.querySelectorAll(".nav-phone li");
navphoneli.forEach((element) => {
  element.addEventListener("click", function () {
    removeactiveliphone();
    element.classList.add("active");
    liphone.classList.remove("active");
  });
});
navphoneli[0].addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
navphoneli[1].addEventListener("click", function () {
  window.scrollTo({
    top: sec[0].offsetTop - 100,
    behavior: "smooth",
  });
});
navphoneli[2].addEventListener("click", function () {
  window.scrollTo({
    top: sec[1].offsetTop - 100,
    behavior: "smooth",
  });
});
navphoneli[3].addEventListener("click", function () {
  window.scrollTo({
    top: sec[2].offsetTop - 100,
    behavior: "smooth",
  });
});
navphoneli[4].addEventListener("click", function () {
  window.scrollTo({
    top: sec[3].offsetTop - 100,
    behavior: "smooth",
  });
});
navphoneli[5].addEventListener("click", function () {
  window.scrollTo({
    top: sec[4].offsetTop - 100,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactiveliphone();
    navphoneli[0].classList.add("active");
  }
  if (window.scrollY >= sec[0].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[1].classList.add("active");
  }
  if (window.scrollY >= sec[1].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[2].classList.add("active");
  }
  if (window.scrollY >= sec[2].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[3].classList.add("active");
  }
  if (window.scrollY >= sec[3].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[4].classList.add("active");
  }
  if (window.scrollY >= sec[4].offsetTop - 200) {
    removeactiveliphone();
    navphoneli[5].classList.add("active");
  }
});
function removeactiveliphone() {
  navphoneli.forEach((element) => {
    element.classList.remove("active");
  });
}
// <!-- ============= [ POINT ] ============ -->
let pointslidespan = document.querySelectorAll(".point-slide span");
pointslidespan[0].classList.add("active");
pointslidespan.forEach((element) => {
  element.addEventListener("click", function () {
    removeactive();
    element.classList.add("active");
  });
});
pointslidespan[0].addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
pointslidespan[1].addEventListener("click", function () {
  window.scrollTo({
    top: sec[0].offsetTop - 100,
    behavior: "smooth",
  });
});
pointslidespan[2].addEventListener("click", function () {
  window.scrollTo({
    top: sec[1].offsetTop - 100,
    behavior: "smooth",
  });
});
pointslidespan[3].addEventListener("click", function () {
  window.scrollTo({
    top: sec[2].offsetTop - 100,
    behavior: "smooth",
  });
});
pointslidespan[4].addEventListener("click", function () {
  window.scrollTo({
    top: sec[3].offsetTop - 100,
    behavior: "smooth",
  });
});
pointslidespan[5].addEventListener("click", function () {
  window.scrollTo({
    top: sec[4].offsetTop - 100,
    behavior: "smooth",
  });
});
function removeactive() {
  pointslidespan.forEach((element) => {
    element.classList.remove("active");
  });
}
window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactive();
    pointslidespan[0].classList.add("active");
  }
  if (window.scrollY >= sec[0].offsetTop - 200) {
    removeactive();
    pointslidespan[1].classList.add("active");
  }
  if (window.scrollY >= sec[1].offsetTop - 200) {
    removeactive();
    pointslidespan[2].classList.add("active");
  }
  if (window.scrollY >= sec[2].offsetTop - 200) {
    removeactive();
    pointslidespan[3].classList.add("active");
  }
  if (window.scrollY >= sec[3].offsetTop - 200) {
    removeactive();
    pointslidespan[4].classList.add("active");
  }
  if (window.scrollY >= sec[4].offsetTop - 200) {
    removeactive();
    pointslidespan[5].classList.add("active");
  }
});
// <!-- ============= [ POINT ] ============ -->
let butemail = document.querySelector(".but-email");
let emailinput = document.querySelector(".email-input");
let emailform = document.querySelector("#email");

butemail.addEventListener("click", function (e) {
  e.preventDefault();
  emailform.value = emailinput.value;
  window.scrollTo({
    top: sec[4].offsetTop - 100,
    behavior: "smooth",
  });
});

// <!-- ============= [ LODE ] ============ -->
let bgLoading = document.getElementById("bgLoading");
let bgLoadingCont = document.querySelector("#bgLoading .loading-container");
setTimeout(function lode() {
  bgLoadingCont.style.opacity = "0";
  bgLoading.style.pointerEvents = "none";
  bgLoading.style.backdropFilter = "blur(0px)";
  setTimeout(function lodenone() {
    bgLoadingCont.style.display = "none";
    bgLoading.style.display = "none";
  }, 1500);
}, 1500);

// <!-- ============= [ sendEmailFormForm ] ============ -->
let formemail = document.querySelector("#form-email");
let overlayform = document.querySelector(".overlay-form");
let closemessage = document.querySelector(".close-message");
let overlayformAudio = document.querySelector(".overlay-form audio");
let names = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let msg = document.querySelector("#msg");
let button = document.querySelector("#button");

if (msg.value.length > 40) {
  formemail.addEventListener("submit", function (e) {
    e.preventDefault();
    axios
      .post("https://nodemailer-gmail-hqhc.vercel.app/gmail", {
        name: names.value,
        email: email.value,
        phone: phone.value,
        msg: msg.value,
      })
      .then((res) => {});
    overlayform.classList.add("active");
    overlayformAudio.play();
    setTimeout(() => {
      overlayform.classList.remove("active");
    }, 3000);
    button.classList.add("active");
  });
} else {
  button.classList.remove("active");
}

closemessage.addEventListener("click", function () {
  overlayform.classList.remove("active");
});

formemail.addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("https://nodemailer-gmail-hqhc.vercel.app/gmail", {
      name: names.value,
      email: email.value,
      phone: phone.value,
      msg: msg.value,
    })
    .then((res) => {
      overlayform.classList.add("active");
      overlayformAudio.play();
      setTimeout(() => {
        overlayform.classList.remove("active");
      }, 3000);
    });
});

msg.addEventListener("keyup", ceckmes);
phone.addEventListener("keyup", ceckmes);

function ceckmes() {
  if (msg.value.length > 20 && phone.value.length >= 11) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
}

// ----------------------

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  alert(
    "Sorry, right click is disabled to prevent leakage of 			confidential functions"
  );
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
    return false;
  }
};
