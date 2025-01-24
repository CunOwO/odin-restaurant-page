import phone from "./images/contacts/phone.svg";
import email from "./images/contacts/email.svg";
import address from "./images/contacts/address.svg";

export default function loadContact() {
    const content = document.querySelector("#content");
    const contactContainer = document.createElement("div");

    contactContainer.classList.toggle("contact-container");
    contactContainer.classList.toggle("hidden");

    const header = document.createElement("h1");
    header.textContent = "Contact us";
    contactContainer.appendChild(header);

    const contactItemContainer1 = document.createElement("div");
    const phoneIcon = document.createElement("img");
    phoneIcon.src = phone;
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "(555) 123-4567";
    contactItemContainer1.appendChild(phoneIcon);
    contactItemContainer1.appendChild(phoneNumber);
    contactContainer.appendChild(contactItemContainer1);

    const contactItemContainer2 = document.createElement("div");
    const emailIcon = document.createElement("img");
    emailIcon.src = email;
    const emailAddress = document.createElement("p");
    emailAddress.textContent = "info@coastalgrill.com";
    contactItemContainer2.appendChild(emailIcon);
    contactItemContainer2.appendChild(emailAddress);
    contactContainer.appendChild(contactItemContainer2);

    const contactItemContainer3 = document.createElement("div");
    const addressIcon = document.createElement("img");
    addressIcon.src = address;
    const addressDetail = document.createElement("p");
    addressDetail.textContent = "123 Ocean View Blvd, Seaside City, CA 90210";
    contactItemContainer3.appendChild(addressIcon);
    contactItemContainer3.appendChild(addressDetail);
    contactContainer.appendChild(contactItemContainer3);

    content.appendChild(contactContainer);
}