import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

loadHome();
loadMenu();
loadContact();

const homeContainer = document.querySelector(".home-container");
const menuContainer = document.querySelector(".menu-container");
const contactContainer = document.querySelector(".contact-container");

const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("home")) {
        menuContainer.classList.add("hidden");
        contactContainer.classList.add("hidden");
        homeContainer.classList.remove("hidden");
    }
    else if (target.classList.contains("menu")) {
        homeContainer.classList.add("hidden");
        contactContainer.classList.add("hidden");
        menuContainer.classList.remove("hidden");
    }
    else if (target.classList.contains("contact")) {
        homeContainer.classList.add("hidden");
        menuContainer.classList.add("hidden");
        contactContainer.classList.remove("hidden");
    }
});

const viewMenuBtn = document.querySelector(".home-container button");
const menuBtn = document.querySelector(".menu");

viewMenuBtn.addEventListener("click", () => {
    menuBtn.dispatchEvent(new MouseEvent("click", {bubbles: true}));
});