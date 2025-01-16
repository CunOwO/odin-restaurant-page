import clamChowder from "./images/appetizers/clam-chowder.jpg";
import shrimpCocktail from "./images/appetizers/shrimp-cocktail.jpg";
import grilledSalmon from "./images/main-courses/grilled-salmon.jpg";
import seafoodPasta from "./images/main-courses/seafood-pasta.jpg";
import mahiMahiTacos from "./images/main-courses/mahi-mahi-tacos.jpg";
import lobsterTail from "./images/main-courses/lobster-tail.jpg";
import keyLimePie from "./images/desserts/key-lime-pie.jpg";
import moltenLavaCake from "./images/desserts/molten-lava-cake.jpg";

export default function loadMenu() {
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");

    menuContainer.classList.toggle("menu-container");
    menuContainer.classList.toggle("hidden");

    const menuItemContainer1 = document.createElement("div");
    menuItemContainer1.classList.toggle("menu-item");
    const menuItemHeader1 = document.createElement("h1");
    menuItemHeader1.textContent = "Appetizers";
    menuItemContainer1.appendChild(menuItemHeader1);
    menuItemContainer1.appendChild(renderMenuItem(clamChowder, Appetizer.appetizerList[0]));
    menuItemContainer1.appendChild(renderMenuItem(shrimpCocktail, Appetizer.appetizerList[1]));
    menuContainer.appendChild(menuItemContainer1);

    const menuItemContainer2 = document.createElement("div");
    menuItemContainer2.classList.toggle("menu-item");
    const menuItemHeader2 = document.createElement("h1");
    menuItemHeader2.textContent = "Main Courses";
    menuItemContainer2.appendChild(menuItemHeader2);
    menuItemContainer2.appendChild(renderMenuItem(grilledSalmon, MainCourse.mainCourseList[0]));
    menuItemContainer2.appendChild(renderMenuItem(seafoodPasta, MainCourse.mainCourseList[1]));
    menuItemContainer2.appendChild(renderMenuItem(mahiMahiTacos, MainCourse.mainCourseList[2]));
    menuItemContainer2.appendChild(renderMenuItem(lobsterTail, MainCourse.mainCourseList[3]));
    menuContainer.appendChild(menuItemContainer2);

    const menuItemContainer3 = document.createElement("div");
    menuItemContainer3.classList.toggle("menu-item");
    const menuItemHeader3 = document.createElement("h1");
    menuItemHeader3.textContent = "Desserts";
    menuItemContainer3.appendChild(menuItemHeader3);
    menuItemContainer3.appendChild(renderMenuItem(keyLimePie, Dessert.dessertList[0]));
    menuItemContainer3.appendChild(renderMenuItem(moltenLavaCake, Dessert.dessertList[1]));
    menuContainer.appendChild(menuItemContainer3);

    content.appendChild(menuContainer);
}

function renderMenuItem(imgPath, menuData) {
    const menuItemContainer = document.createElement("div");

    const menuItemImage = document.createElement("img");
    menuItemImage.src = imgPath;

    const menuItemName = document.createElement("p");
    menuItemName.textContent = menuData.name;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = menuData.description;

    menuItemContainer.appendChild(menuItemImage);
    menuItemContainer.appendChild(menuItemName);
    menuItemContainer.appendChild(menuItemDescription);

    return menuItemContainer;
}


class Appetizer {
    static appetizerList = [
        {
            name: "Clam Chowder",
            description: "Creamy New England-style chowder with fresh clams, potatoes, and herbs."
        },
        {
            name: "Shrimp Cocktail",
            description: "Chilled jumbo shrimp with house-made cocktail sauce."
        }
    ];
}

class MainCourse {
    static mainCourseList = [
        {
            name: "Grilled Salmon",
            description: "Fresh Atlantic salmon grilled to perfection with a lemon-butter glaze."
        },
        {
            name: "Seafood Pasta",
            description: "Linguine tossed in a garlic cream sauce with shrimp, scallops, and mussels."
        },
        {
            name: "Mahi-Mahi Tacos",
            description: "Soft tortillas filled with grilled mahi-mahi, cabbage slaw, and chipotle mayo."
        },
        {
            name: "Lobster Tail",
            description: "Broiled lobster tail with drawn butter and a side of roasted vegetables."
        }
    ];
}

class Dessert {
    static dessertList = [
        {
            name: "Key Lime Pie",
            description: "Tangy key lime filling with a graham cracker crust and whipped cream."
        },
        {
            name: "Molten Lava Cake",
            description: "Warm chocolate cake with a gooey center, served with vanilla ice cream."
        }
    ];
}