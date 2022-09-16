const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
closeIcon.style.display = "none";
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
}
hamburger.addEventListener("click", toggleMenu);

const projectArray = [
  {
    id: 1,
    name: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["Html", "CSS", "Ruby"],
    image: "img/background.png",
  },
  {
    id: 2,
    name: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["Html", "CSS", "Ruby"],
    image: "img/background.png",
  },
  {
    id: 3,
    name: "Website Portfolio DataBase",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["Html", "CSS", "Ruby"],
    image: "img/background.png",
  },
  {
    id: 4,
    name: "Professional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["Html", "CSS", "Ruby"],
    image: "img/background.png",
  },
  {
    id: 5,
    name: "Website Portfolio DataBase",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["Html", "CSS", "Ruby"],
    image: "img/background.png",
  },
  {
    id: 6,
    name: "Data Dashboard Healthcare",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["Html", "CSS", "Ruby"],
    image: "img/background.png",
  },
];

const card = document.getElementById("project");

const generateCard = () =>
  (card.innerHTML = projectArray
    .map(
      (x) => `
    <div class="project-box ">
    <h2 class="project-title">${x.name}</h2>
    <p class="project-desc">
      ${x.description}
    </p>
    <ul>
      <li><a href="">${x.technologies[0]}</a></li>
      <li><a href="">${x.technologies[1]}</a></li>
      <li><a href="">${x.technologies[2]}</a></li>
    </ul>
    <button class="see-project-btn">See project</button>
  </div>
    `
    )
    .join(""));

generateCard();

// Popup Window

const open = document.getElementsByClassName("see-project-btn");
const modal = document.getElementById("modal-container");

open[0].addEventListener("click", () => {
  modal.classList.add("show");
});
open[1].addEventListener("click", () => {
  modal.classList.add("show");
});
open[2].addEventListener("click", () => {
  modal.classList.add("show");
});
open[3].addEventListener("click", () => {
  modal.classList.add("show");
});
open[4].addEventListener("click", () => {
  modal.classList.add("show");
});
open[5].addEventListener("click", () => {
  modal.classList.add("show");
});

function generatePopup() {
  return (modal.innerHTML = projectArray
    .map(
      (x) => `
    <div class="modal-container" >
          <div class="modal-header">
              <h1>${x.name}</h1>
              <i class="fa-solid fa-xmark" id="close"></i>
          </div>
          <div class="modal-lists">
            <ul>
              <li><a href="">${x.technologies[0]}</a></li>
              <li><a href="">${x.technologies[1]}</a></li>
              <li><a href="">${x.technologies[2]}</a></li>
            </ul>
          </div>
          <div class="modal-body">
               <img src="${x.image}" alt="Snapshoot">
               <p>${x.description}</p>
             
          </div>
          <div class="modal-buttons">
          <a href="#">See Live <img src="img/Icon.png" alt=""></a>
          <a href="#">See Source <img src="img/Vector.png" alt=""></a>
        </div>
        </div>
    `
    )
    .join(""));
}
generatePopup();

const close = document.getElementById("close");
close.addEventListener("click", () => {
  modal.classList.remove("show");
});

// FORM Validation

let email = document.getElementById("email");
let submit = document.getElementById("submit");
let small = document.querySelector("small");
let form = document.querySelector("form");

email.addEventListener("blur", () => {
  // Validate the email
  let regex = /^[a-z0-9_@][a-z]/;
  let str = email.value;
  if (regex.test(str)) {
    form.submit;
  } else {
    small.classList.add("show");
  }
});

/// STORING FORM DATA ///

let nameSpace = document.getElementById("name");
let textSpace = document.getElementById("text");
function storeData() {
  localStorage.setItem("UserName", nameSpace.value);
  localStorage.setItem("Email", email.value);
  localStorage.setItem("Text", textSpace.value);
  console.log(localStorage);
}

function showData() {
  let emailData = localStorage.getItem("Email");
  let nameData = localStorage.getItem("UserName");
  let textData = localStorage.getItem("Text");

  email.value = emailData;
  nameSpace.value = nameData;
  textSpace.innerText = textData;
}

showData();
