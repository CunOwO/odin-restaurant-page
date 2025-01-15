import coverImage from "./images/cover-image.jpg"
export default function loadHome() {
    const content = document.querySelector("#content");
    const headline = document.createElement("h1");
    headline.textContent = "Coastal Grill";

    const image = document.createElement("img");
    image.src = coverImage;

    const description = document.createElement("p");
    description.textContent = "Enjoy a unique dining experience with stunning ocean views. Coastal Grill offers fresh seafood and handcrafted cocktails, perfect for any occasion."

    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
}