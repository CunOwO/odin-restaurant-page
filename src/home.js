import coverImage from "./images/cover-image.jpg";
export default function loadHome() {
    const content = document.querySelector("#content");
    const homeContainer = document.createElement("div");
    homeContainer.classList.toggle("home-container");

    const image = document.createElement("img");
    image.src = coverImage;

    const description = document.createElement("p");
    description.textContent = "Enjoy a unique dining experience with stunning ocean views. Coastal Grill offers fresh seafood and handcrafted cocktails, perfect for any occasion."

    homeContainer.appendChild(image);
    homeContainer.appendChild(description);
    content.appendChild(homeContainer);
}