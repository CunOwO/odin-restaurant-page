export default function loadHome() {
    const content = document.querySelector("#content");
    const homeContainer = document.createElement("div");
    homeContainer.classList.toggle("home-container");

    const hero = document.createElement("h1");
    hero.textContent = "Welcome";

    const description = document.createElement("p");
    description.textContent = "Enjoy a unique dining experience with stunning ocean views. Coastal Grill offers fresh seafood and handcrafted cocktails, perfect for any occasion."

    homeContainer.appendChild(hero);
    homeContainer.appendChild(description);
    content.appendChild(homeContainer);
}